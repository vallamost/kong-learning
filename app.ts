import fastify from 'fastify';

const fastifyServer = fastify({ logger: true });

// Hello world route
fastifyServer.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Sample users route
fastifyServer.get('/users', async (request, reply) => {
  return { 
    users: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ]
  }
})


// Dynamic route with params
fastifyServer.get('/users/:id', async (request, reply) => {
  const { id } = request.params as { id: string };
  return { 
    id,
    name: `User ${id}`,
    timestamp: new Date()
  }
})

// Health check endpoint
fastifyServer.get('/health', async (request, reply) => {
  return { status: 'ok', timestamp: new Date() }
})

// Run the server
const start = async () => {
  try {
    await fastifyServer.listen({ port: 3000 })
  } catch (err) {
    fastifyServer.log.error(err)
    process.exit(1)
  }
}

start()