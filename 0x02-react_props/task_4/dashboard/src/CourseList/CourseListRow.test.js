import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  describe('When isHeader is true', () => {
    it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
      expect(wrapper.find('th').prop('colSpan')).toEqual(2);
    });

    it('renders two cells when textSecondCell is present', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="Header 2" />);
      expect(wrapper.find('th')).toHaveLength(2);
    });
  });

  describe('When isHeader is false', () => {
    it('renders correctly two td elements within a tr element', () => {
      const wrapper = shallow(<CourseListRow textFirstCell="Data 1" textSecondCell="Data 2" />);
      expect(wrapper.find('tr')).toHaveLength(1);
      expect(wrapper.find('td')).toHaveLength(2);
    });
  });
});
