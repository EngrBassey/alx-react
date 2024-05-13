import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe("Logins", ()=> {
    test('should show Logins', () => {
        const value = shallow(<Login />)
        expect(value.exists()).toEqual(true)
    })

    test('should renders two inputs', () => {
        const value = shallow(<Login />)
        expect(value.find('input')).toHaveLength(2)
    })

    test('should renders two label ', () => {
        const value = shallow(<Login />)
        expect(value.find('label')).toHaveLength(2)
    })
})