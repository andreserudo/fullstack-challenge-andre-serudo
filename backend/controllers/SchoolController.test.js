const friby = require('frisby');
const { StatusCodes } = require('http-status-codes');
require('dotenv').config();

const url = 'http://localhost:3001';
const shell = require('shelljs');

const authorization = process.env.API_KEY;

describe('Pelo endpoint school deve ser possível:', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate $');
    shell.exec('npx sequelize-cli db:seed:all $');
  });

  it('listar todas as escolas cadastradas', async () => {
    await friby
      .setup({
        request: {
          headers: {
            Authorization: authorization,
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/school`)
      .expect('status', StatusCodes.OK)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result[0].nome).toBe('Escola Estadual Antônio Villaça');
        expect(result[0].responsavel).toBe('Maísa Couceiro Serro');
        expect(result[1].nome).toBe('Escola Estadual Dom João de Souza Lima');
        expect(result[1].responsavel).toBe('Cora Dias Pederneiras');
        expect(result[2].nome).toBe('Escola Estadual Aureo Nonato');
        expect(result[2].responsavel).toBe('Alessandro Goulart Palhares');
      });
  });

  it('criar um nova escola', async () => {
    await friby
      .setup({
        request: {
          headers: {
            Authorization: authorization,
            'Content-Type': 'application/json',
          },
        },
      })
      .post(`${url}/school`, {
        nome: 'Escola Estadual Anderson de Menezes',
        responsavel: 'Guilherme Campos Saraiva',
      })
      .expect('status', StatusCodes.CREATED)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.nome).toBe('Escola Estadual Anderson de Menezes');
        expect(result.responsavel).toBe('Guilherme Campos Saraiva');
      });
  });

  it('não criar um nova escola sem todos os parametros', async () => {
    await friby
      .setup({
        request: {
          headers: {
            Authorization: authorization,
            'Content-Type': 'application/json',
          },
        },
      })
      .post(`${url}/school`, {
        nome: 'Escola Estadual Anderson de Menezes',

      })
      .expect('status', StatusCodes.BAD_REQUEST)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Missing fields');
      });
  });

  it('editar uma escola', async () => {
    await friby
      .setup({
        request: {
          headers: {
            Authorization: authorization,
            'Content-Type': 'application/json',
          },
        },
      })
      .put(`${url}/school/1`, {
        nome: 'Escola Estadual Anderson de Menezes 2',
        responsavel: 'Guilherme Campos Saraiva',
      })
      .expect('status', StatusCodes.OK)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.id).toBe('1');
        expect(result.nome).toBe('Escola Estadual Anderson de Menezes 2');
        expect(result.responsavel).toBe('Guilherme Campos Saraiva');
      });
  });

  it('não editar uma escola sem todos os seus parametros', async () => {
    await friby
      .setup({
        request: {
          headers: {
            Authorization: authorization,
            'Content-Type': 'application/json',
          },
        },
      })
      .put(`${url}/school/1`, {
        responsavel: 'Guilherme Campos Saraiva',
      })
      .expect('status', StatusCodes.BAD_REQUEST)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Missing fields');
      });
  });

  it('excluir uma escola', async () => {
    await friby
      .setup({
        request: {
          headers: {
            Authorization: authorization,
            'Content-Type': 'application/json',
          },
        },
      })
      .delete(`${url}/school/2`)
      .expect('status', StatusCodes.NO_CONTENT);
  });
});
