import React from "react";
import { shallow } from "enzyme";
import { RoundedButton } from "../components/Buttons";


const render = (displayName, theme, size) =>
    shallow(<RoundedButton displayName={displayName} theme={theme} size={size}/>);


describe('<RoundedButton />', () => {
    it('default button', () => {
        const component = render('123');
        let button = component.find('button');
        console.log(button.debug());
        expect(button.hasClass('button-white')).toBe(true);
        expect(button.hasClass('button-large')).toBe(true);
    });

    it('small pink button', () => {
        const component = render('123', 'pink', 'small');
        let button = component.find('button');
        console.log(button.debug());
        expect(button.hasClass('button-pink')).toBe(true);
        expect(button.hasClass('button-small')).toBe(true);
    });
})