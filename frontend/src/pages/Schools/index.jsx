/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import Table from '../../components/commom/Table';
import SchoolsForm from '../../components/forms/SchoolsForm';
import websitePageHOC from '../../components/wrapperPages/hoc';
import SchoolsPageWrapper from './styles';
import ApplicationContext from '../../context/ApplicationContext';
import serviceStates from '../../services';

function Schools() {
  const [showSchoolForm, setShowSchoolForm] = useState(false);
  const [schoolsToShow, setSchoolsToShow] = useState([]);
  const { getAllSchools, apiState, schools } = useContext(ApplicationContext);

  const displayAccordingAPIState = () => {
    if (apiState === serviceStates.LOADING) {
      return (<p>Buscando Escolas...</p>);
    }
    if (apiState === serviceStates.ERROR) {
      return (<p>Houve um erro em exibir as Escolas</p>);
    }

    return <Table data={schools} />;
  };

  const handleRequest = async () => {
    await getAllSchools();
  };

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <SchoolsPageWrapper>
      <button
        type="button"
        onClick={() => setShowSchoolForm(!showSchoolForm)}
        disabled={showSchoolForm}
      >
        Adicionar Escola

      </button>
      { showSchoolForm && <SchoolsForm closeForm={() => setShowSchoolForm(!setShowSchoolForm)} />}
      { displayAccordingAPIState() }
    </SchoolsPageWrapper>

  );
}

export default websitePageHOC(
  Schools, {
    pageTitle: 'Escolas',
  },
);
