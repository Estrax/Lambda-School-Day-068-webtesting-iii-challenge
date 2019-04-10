// Test away!
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

afterEach(cleanup);

describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    });

    it('renders all the elements properly', () => {
        const { getByText } = render(<Display />);
        getByText('', { selector: 'div.display' });
        getByText('Unlocked', { selector: 'div.led' });
        getByText('Open', { selector: 'div.led' });
    });

    it('displays appropriate values with the default state', () => {
        const { getByText } = render(<Display />);
        getByText('', { selector: 'div.display' });
        getByText('Unlocked', { selector: 'div.led' });
        getByText('Open', { selector: 'div.led' });
    });

    it('displays if the gate is locked', () => {
        const { getByText } = render(<Display locked={true} closed={true} />);
        getByText('Locked', { selector: 'div.red-led' });
    });
    
    it('displays if the gate is locked', () => {
        const { getByText } = render(<Display locked={false} closed={true} />);
        getByText('Unlocked', { selector: 'div.green-led' });
    });

    it('displays if the gate is closed', () => {
        const { getByText } = render(<Display locked={false} closed={true} />);
        getByText('Closed', { selector: 'div.red-led' });
    });

    it('displays if the gate is open', () => {
        const { getByText } = render(<Display locked={false} closed={false} />);
        getByText('Open', { selector: 'div.green-led' });
    });

    it('uses the green led class when the gate is unlocked or open', () => {
        const { container } = render(<Display locked={false} closed={false} />);
        expect(container.children[0].children[0]).toHaveClass('led green-led');
        expect(container.children[0].children[1]).toHaveClass('led green-led');
    });

    it('uses the red led class when the gate is locked or closed', () => {
        const { container } = render(<Display locked={true} closed={true} />);
        expect(container.children[0].children[0]).toHaveClass('led red-led');
        expect(container.children[0].children[1]).toHaveClass('led red-led');
    });
});