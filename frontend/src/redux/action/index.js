import { getAll } from '../../services/schools';

// eslint-disable-next-line no-unused-vars
const nomes = [
  {
    id: '1',
    nome: 'Escola Estadual Antônio Villaça',
    responsavel: 'Maísa Couceiro Serro',
    createdAt: '2021-06-19T15:41:27.836Z',
    updatedAt: '2021-06-19T15:41:27.836Z',
  },
  {
    id: '2',
    nome: 'Escola Estadual Dom João de Souza Lima',
    responsavel: 'Cora Dias Pederneiras',
    createdAt: '2021-06-19T15:41:27.836Z',
    updatedAt: '2021-06-19T15:41:27.836Z',
  },
  {
    id: '3',
    nome: 'Escola Estadual Aureo Nonato',
    responsavel: 'Alessandro Goulart Palhares',
    createdAt: '2021-06-19T15:41:27.836Z',
    updatedAt: '2021-06-19T15:41:27.836Z',
  },
];

export const errorInRequestSchools = () => ({
  type: 'ERROR',
});

export const requestSchools = () => ({
  type: 'REQUEST_ALL_CURRENCIES',
});

export const receiveSchools = (schools) => ({
  type: 'SUCCESS',
  schools,
});

export const getAllSchools = (schools) => ({
  type: 'GET_ALL_SCHOOLS',
  schools,
});

export const fetchAllCharacters = () => async (dispatch) => {
  dispatch(requestSchools);
  const response = await getAll();

  if (response instanceof Array) {
    dispatch(getAllSchools(response));
  }
};
