import Fastify from 'fastify';

export async function build() {
  const server = Fastify({ logger: true });

  server.get(
    '/',
    {
      schema: {
        response: {
          200: {
            type: 'string',
          },
        },
      },
    },
    async () => {
      return 'Hello world';
    }
  );

  return server;
}
