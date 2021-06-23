import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SchoolFormWrapper from './styles';

const defaultSchoolForm = {
  nome: '',
  responsavel: '',
};

// eslint-disable-next-line no-unused-vars
const statusResponseRequest = {
  success: 'SUCESS',
  error: 'ERROR',
};

// eslint-disable-next-line no-unused-vars
const statusFormMessages = {
  success: 'Cadastro realizado com sucesso!',
  error: 'Não foi possível realizar o cadastro.',
};

function SchoolsForm({ closeForm }) {
  const [schoolValues, setSchoolValues] = useState(defaultSchoolForm);
  const [allowToSave, setAllowToSave] = useState(true);

  const handleChange = (e, name) => {
    const { value } = e.target;
    setSchoolValues({ ...schoolValues, [name]: value });
  };

  const checkIfCanAllowSave = () => {
    const { nome, responsavel } = schoolValues;

    if ((nome !== '') && (responsavel !== '')) {
      setAllowToSave(false);
    } else {
      setAllowToSave(true);
    }
  };

  useEffect(() => {
    checkIfCanAllowSave();
  }, [schoolValues]);

  return (
    <SchoolFormWrapper>
      <form>
        <label htmlFor="nome">
          Nome da Escola:
          <input
            id="nome"
            type="text"
            value={schoolValues.nome}
            onChange={(e) => handleChange(e, 'nome')}
          />
        </label>
        <label htmlFor="responsavel">
          Responsável:
          <input
            id="responsavel"
            type="text"
            value={schoolValues.responsavel}
            onChange={(e) => handleChange(e, 'responsavel')}
          />
        </label>
        <SchoolFormWrapper.Actions>
          <button
            type="button"
            disabled={allowToSave}
          >
            Salvar
          </button>
          <button
            type="button"
            onClick={() => closeForm()}
          >
            Fechar
          </button>
        </SchoolFormWrapper.Actions>
      </form>
    </SchoolFormWrapper>
  );
}

SchoolsForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
};

export default SchoolsForm;
