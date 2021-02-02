import React from "react";
import { mount } from "enzyme";
import FormView, { getIsoDate } from "../pages/JogForm/components/FormView";


const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        goBack: mockHistoryPush,
    }),
}));

const render = (date, distance, time, onSubmit) =>
    mount(<FormView date={date} distance={distance} time={time} onSubmit={onSubmit}/>);


describe('<FormView />', () => {
    describe('getIsoDate converter', () => {
        it('valid date', () => {
            const date = new Date(0);
            const isoDate = getIsoDate(date);

            expect(isoDate).toBe('1970-01-01');
        });

        it('empty date', () => {

            const isoDate = getIsoDate(undefined);

            expect(isoDate).toBeUndefined();
        });
    })

    describe('input element', () => {
        it('renders the default value', () => {
            const component = render();

            expect(component.find('input[name="distance"]').prop('defaultValue')).toBeUndefined();
            expect(component.find('input[name="time"]').prop('defaultValue')).toBeUndefined();
            expect(component.find('input[name="date"]').prop('defaultValue')).toBeUndefined();
        });

        it('Filled form should not crush', () => {
            const date = new Date();

            const component = render(date, 10, 10);
            expect(component.find('input[name="distance"]').prop('defaultValue')).toBe(10);
            expect(component.find('input[name="time"]').prop('defaultValue')).toBe(10);
            expect(component.find('input[name="date"]').prop('defaultValue')).toBe(getIsoDate(date));
        });
    })

    it('check submit', () => {
        const fakeSubmit = jest.fn();

        const date = new Date();
        const data = { distance: 10, time: 10, date: date }

        const component = render(data.date, data.distance, data.time, fakeSubmit);

        expect(component.find('form')).toHaveLength(1);
        const formEventMocked = { preventDefault: jest.fn() };

        component.find('form').simulate('submit', formEventMocked);
        expect(formEventMocked.preventDefault).toBeCalledTimes(1);
        expect(fakeSubmit).toBeCalledTimes(1);

        data.date = getIsoDate(date);
        expect(fakeSubmit).toBeCalledWith({ distance: '10', time: '10', date: data.date })
    });
})