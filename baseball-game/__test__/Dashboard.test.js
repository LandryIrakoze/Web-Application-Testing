import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

import Dashboard from '../src/components/Dashboard';

describe("<App />", () => {
  it('renders without crashing using ReactDOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    render(<Dashboard />)
  })

  it('renders four buttons', () => {
    const dashboard = <Dashboard />;

    app.getByText(/hello world/i)
  })
})