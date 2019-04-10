// Test away
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

afterEach(cleanup);

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />);
    });

    it('renders all the elements (display & controls) properly', () => {
        const { getByText } = render(<Dashboard />);
        getByText('', { selector: 'div.display' });
        getByText('', { selector: 'div.controls' });
    });
});