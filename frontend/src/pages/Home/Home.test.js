import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import Home from './index';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>), history,
  };
};

describe('<Home />', () => {
  it('shoul have a link to Schools Page', () => {
    const { history, getByText } = renderWithRouter(<Home />);

    fireEvent.click(getByText(/Escolas/i));
    const { pathname } = history.location;

    expect(pathname).toBe('/schools');
  });
});
