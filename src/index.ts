import { build } from './server.js';

const start = async () => {
  let server;
  try {
    server = await build();
    await server.listen({ host: '0.0.0.0', port: 3000 });
  } catch (err) {
    server?.log.error(err);
    process.exit(1);
  }
};

await start();
