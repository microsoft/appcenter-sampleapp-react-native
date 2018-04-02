import * as React from 'react';
import App from '../src/App';
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<App />);
});
