import HttpClient from '../../infra/http';

const urlBase = 'http://localhost:3001/';

const getAll = () => {
  const endpoint = `${urlBase}school`;
  return HttpClient(endpoint, {
    headers: {
      method: 'GET',
      'Content-Type': 'aplication/json',
      Authorization: `${process.env.REACT_APP_API_KEY}`,
    },
  }).then((response) => response);
};

const createSchool = ({ nome, responsavel }) => {
  const endpoint = `${urlBase}school`;

  return HttpClient(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `${process.env.REACT_APP_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: { nome, responsavel },
  }).then((response) => response).catch((err) => err);
};

const update = async () => {
  console.log('update');
};

export {
  getAll,
  update,
  createSchool,
};
