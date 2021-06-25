import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import Header from './index';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>), history,
  };
};

describe('<Header />', () => {
  it('shoul have a link to Home Page', () => {
    const { history, getByText } = renderWithRouter(<Header />);

    fireEvent.click(getByText(/Página Inicial/i));
    const { pathname } = history.location;

    expect(pathname).toBe('/');
  });
});
