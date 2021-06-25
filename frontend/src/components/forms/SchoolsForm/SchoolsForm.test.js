import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ApplicationContext from '../../../context/ApplicationContext';

import SchoolsForm from './index';

describe('<SchoolsForm />', () => {
  it('should render according patterns', () => {
    const getAllSchools = jest.fn();
    const closeForm = jest.fn();

    render(
      <ApplicationContext.Provider value={{ getAllSchools }}>
        <SchoolsForm closeForm={closeForm} />
      </ApplicationContext.Provider>,

    );

    const nomeTextField = screen.getByText(/Nome da Escola:/i);
    const responsavelTextField = screen.getByText(/Responsável:/i);
    const buttonToSave = screen.getByText(/Salvar/i);
    const buttonToClose = screen.getByText(/Fechar/i);
    expect(nomeTextField).toMatchSnapshot();
    expect(responsavelTextField).toMatchSnapshot();
    expect(buttonToSave).toMatchSnapshot();
    expect(buttonToClose).toMatchSnapshot();
  });

  it('should render Salvar button as disable', () => {
    const getAllSchools = jest.fn();
    const closeForm = jest.fn();
    render(
      <ApplicationContext.Provider value={{ getAllSchools }}>
        <SchoolsForm closeForm={closeForm} />
      </ApplicationContext.Provider>,
    );

    const buttonSalvar = screen.getByText(/Salvar/i);
    expect(buttonSalvar).toBeDisabled();
  });

  it('the button to Save should have be available only when all fields are filled', async () => {
    const getAllSchools = jest.fn();
    const closeForm = jest.fn();
    render(
      <ApplicationContext.Provider value={{ getAllSchools }}>
        <SchoolsForm closeForm={closeForm} />
      </ApplicationContext.Provider>,
    );

    const buttonSalvar = screen.getByText(/Salvar/i);
    await userEvent.type(screen.getByTestId('schoolNome'), 'Escola Estadual Augusto Nunes');
    await userEvent.type(screen.getByTestId('schoolResponsavel'), 'Maria do Carmo');
    expect(buttonSalvar).not.toBeDisabled();
  });
});
