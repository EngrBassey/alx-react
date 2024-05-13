import Header from "./Header";
import React from 'react';
import { shallow } from 'enzyme';

describe("Header", () => {
    test('show Header', () => {
        const value = shallow(<Header />)
        expect(value.exists()).toEqual(true)
    })
    test('should show h1 and img', () => {
        const value = shallow(<Header />)
        expect(value.exists("img")).toEqual(true)
        expect(value.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true)
    })
    
})