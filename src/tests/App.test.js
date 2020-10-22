import React from 'react';
import { mount } from 'enzyme';
import VideosView from '../views/VideosView';

test('renders App', () => {
  const wrapper = mount(<VideosView />);
  expect(wrapper.find('VideosView')).toHaveLength(1);
});
