import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

test('renders App', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('App')).toHaveLength(1);
});
