const friby = require('frisby');

const url = 'http://localhost:3001';

describe('Pelo endpoint school deve ser possível:', () => {
  it('não ser acessado sem a autorização', async () => {
    await friby
      .setup({
        request: {
          headers: {
            Authorization: '',
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/school`)
      .expect('status', 401)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Unauthorized');
      });
  });
});
