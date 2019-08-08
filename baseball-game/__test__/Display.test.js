import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

import Display from '../src/components/Display';

describe("<App />", () => {
  it('renders without crashing using ReactDOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    render(<Display />)
  })

  it('should render the ball count', () => {
    
  })

  it('should render the strike count', () => {
    
  })
})