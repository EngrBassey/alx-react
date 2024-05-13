import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  // Test to verify basic rendering without crashing
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  // Test to verify rendering with dummy type and value props
  it('renders correctly with dummy type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.text()).toEqual('test');
    expect(wrapper.prop('data-notification-type')).toEqual('default');
  });

  // Test to verify rendering with dummy html prop
  it('renders correctly with dummy html prop', () => {
    const htmlContent = '<u>test</u>';
    const wrapper = shallow(<NotificationItem html={{ __html: htmlContent }} />);
    expect(wrapper.prop('dangerouslySetInnerHTML')).toEqual({ __html: htmlContent });
  });
});
