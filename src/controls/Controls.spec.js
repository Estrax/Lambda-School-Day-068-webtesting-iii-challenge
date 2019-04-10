// Test away!
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';

afterEach(cleanup);

describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />);
    });

    it('renders all the elements properly', () => {
        const { getByText } = render(<Controls />);
        getByText('', { selector: 'div.controls' });
        getByText('Lock Gate', { selector: 'button.toggle-btn' });
        getByText('Close Gate', { selector: 'button.toggle-btn' });
    });
});