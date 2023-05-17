import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage';

describe('Homepage', () => {
  it('renders without crashing', () => {
    shallow(<Homepage />);
  });

  it('contains a Header component', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  it('contains a Carousel component', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.find('Carousel').exists()).toBe(true);
  });

  it('contains a Trending section', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.find('.trending-section').exists()).toBe(true);
  });

  it('contains a Best Sellers section', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.find('.best-sellers-section').exists()).toBe(true);
  });
});
