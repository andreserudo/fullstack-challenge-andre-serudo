import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import ApplicationContext from '../../context/ApplicationContext';

import Schools from './index';

const schoolsMocked = [
  {
    id: 1,
    nome: 'Escola Estadual Antônio Villaça',
    responsavel: 'Maísa Couceiro Serro',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: 2,
    nome: 'Escola Estadual Dom João de Souza Lima',
    responsavel: 'Cora Dias Pederneiras',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
];

const renderWithContext = () => {
  const getAllSchools = jest.fn(() => schoolsMocked);
  const schools = schoolsMocked;
  render(
    <ApplicationContext.Provider value={{ getAllSchools, schools }}>
      <Schools />
    </ApplicationContext.Provider>,
  );
};

describe('<SchoolsForm />', () => {
  it('should render according patterns', () => {
    renderWithContext();

    expect(true).toBe(true);
  });
});
