import React from 'react';
import PropTypes from 'prop-types';

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Responsável</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.responsavel}</td>
              <td>Alterar</td>
            </tr>
          ))
}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.shape({})]),
  ).isRequired,

};

export default Table;
