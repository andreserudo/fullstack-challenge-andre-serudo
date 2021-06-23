import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ApplicationContext from './ApplicationContext';
import { getAll } from '../services/schools';

const states = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

function Provider({ children }) {
  const [schools, setSchools] = useState([]);
  const [apiState, setApitState] = useState(states.LOADING);

  const getAllSchools = async () => {
    setApitState(states.LOADING);
    const schoolsFromApi = await getAll();

    if (!schools) {
      setApitState(states.ERROR);
    } else {
      setSchools(schoolsFromApi);
      setApitState(states.SUCCESS);
    }
  };

  const context = {
    schools,
    apiState,
    getAllSchools,
  };

  return (
    <ApplicationContext.Provider value={context}>
      {children}
    </ApplicationContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;
