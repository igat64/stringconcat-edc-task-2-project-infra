import { build } from './server.js';

describe('server', () => {
  test('GET / executes correctly', async () => {
    const app = await build();

    const response = await app.inject({
      method: 'GET',
      url: '/',
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('Hello world');
  });
});
