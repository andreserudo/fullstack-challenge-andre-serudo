/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllCharacters } from '../../redux/action';
import Table from '../../components/commom/Table';
import SchoolsForm from '../../components/forms/SchoolsForm';
import websitePageHOC from '../../components/wrapperPages/hoc';
import SchoolsPageWrapper from './styles';

function Schools({ getAll, schools, requestState }) {
  const [showSchoolForm, setShowSchoolForm] = useState(false);
  const [schoolsToShow, setSchoolsToShow] = useState([]);
  console.log(schools);
  const handleRequest = async () => {
    await getAll();
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

Schools.propTypes = {
  getAll: PropTypes.func.isRequired,
  requestState: PropTypes.string.isRequired,
  schools: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.shape({})]),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  schools: state.schools.schools,
  requestState: state.schools.requestState,
});

const mapDispatchToProps = (dispatch) => ({
  getAll: () => dispatch(fetchAllCharacters()),
});

export default websitePageHOC(
  connect(
    mapStateToProps, mapDispatchToProps,
  )(Schools), {
    pageTitle: 'Escolas',
  },
);
