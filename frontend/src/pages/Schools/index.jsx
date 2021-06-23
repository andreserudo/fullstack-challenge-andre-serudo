/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import Table from '../../components/commom/Table';
import SchoolsForm from '../../components/forms/SchoolsForm';
import websitePageHOC from '../../components/wrapperPages/hoc';
import SchoolsPageWrapper from './styles';
import ApplicationContext from '../../context/ApplicationContext';

function Schools() {
  const [showSchoolForm, setShowSchoolForm] = useState(false);
  const [schoolsToShow, setSchoolsToShow] = useState([]);
  const { getAllSchools, schools } = useContext(ApplicationContext);

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
      <Table data={schools} />
    </SchoolsPageWrapper>

  );
}

export default websitePageHOC(
  Schools, {
    pageTitle: 'Escolas',
  },
);
