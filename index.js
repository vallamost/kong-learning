export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const pathname = url.pathname;

        if (pathname === '/') {
            return new Response(JSON.stringify({ hello: 'world' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        if (pathname === '/users') {
            return new Response(
                JSON.stringify({
                    users: [
                        { id: 1, name: 'John' },
                        { id: 2, name: 'Jane' },
                    ],
                }),
                {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        if (pathname.startsWith('/users/')) {
            const id = pathname.split('/')[2];
            return new Response(
                JSON.stringify({
                    id,
                    name: `User ${id}`,
                    timestamp: new Date(),
                }),
                {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        if (pathname === '/health') {
            return new Response(
                JSON.stringify({ status: 'ok', timestamp: new Date() }),
                {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        return new Response('Not Found', { status: 404 });
    },
};