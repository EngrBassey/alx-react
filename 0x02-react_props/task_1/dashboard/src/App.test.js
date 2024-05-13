import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Notifications from './Notifications';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';

describe('<App />', () => {
  it('renders without crashing', () => {

    const wrapper = shallow(<App />);

    expect(wrapper.find(Notifications)).toHaveLength(1)

    const value = wrapper.find('.App');
    expect(value.exists()).toBeTruthy();
    
    expect(value.find(Header)).toHaveLength(1)
    expect(value.find(Login)).toHaveLength(1)
    expect(value.find(Footer)).toHaveLength(1)

  });

});
