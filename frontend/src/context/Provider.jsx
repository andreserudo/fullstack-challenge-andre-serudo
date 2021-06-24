import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ApplicationContext from './ApplicationContext';
import { getAll } from '../services/schools';
import serviceStates from '../services';

function Provider({ children }) {
  const [schools, setSchools] = useState([]);
  const [apiState, setApitState] = useState(serviceStates.LOADING);

  const getAllSchools = async () => {
    setApitState(serviceStates.LOADING);
    const schoolsFromApi = await getAll();

    if (!schools) {
      setApitState(serviceStates.ERROR);
    } else {
      setSchools(schoolsFromApi);
      setApitState(serviceStates.SUCCESS);
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
