import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import SchoolFormWrapper from './styles';
import { createSchool } from '../../../services/schools';
import ApplicationContext from '../../../context/ApplicationContext';

const defaultSchoolForm = {
  nome: '',
  responsavel: '',
};

const statusFormMessages = {
  success: 'Cadastro realizado com sucesso!',
  error: 'Não foi possível realizar o cadastro.',
};

function SchoolsForm({ closeForm }) {
  const { getAllSchools } = useContext(ApplicationContext);
  const [schoolValues, setSchoolValues] = useState(defaultSchoolForm);
  const [allowToSave, setAllowToSave] = useState(true);
  const [schoolCreated, setSchoolCreated] = useState(false);
  const [messageForSchoolSubmitted, setMessageForSchoolSubmitted] = useState('');

  const handleChange = (e, name) => {
    const { value } = e.target;
    setSchoolValues({ ...schoolValues, [name]: value });
  };

  const handleSubbmit = async (e) => {
    const { nome, responsavel } = schoolValues;
    e.preventDefault();

    const school = await createSchool({ nome, responsavel });
    setSchoolCreated(!schoolCreated);

    if (!school) {
      setMessageForSchoolSubmitted(statusFormMessages.error);
      return;
    }

    await getAllSchools();

    setSchoolValues(defaultSchoolForm);
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
      <form onSubmit={(e) => handleSubbmit(e)}>
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
            type="submit"
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
        {}
      </form>
      {
        messageForSchoolSubmitted && <p>{messageForSchoolSubmitted}</p>
      }
    </SchoolFormWrapper>
  );
}

SchoolsForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
};

export default SchoolsForm;
