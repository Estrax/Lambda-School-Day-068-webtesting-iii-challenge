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
});