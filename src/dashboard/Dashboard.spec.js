// Test away
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';

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

    it('matches the snapshot', () => {
        const tree = renderer.create(<Dashboard />)
        expect(tree.toJSON()).toMatchSnapshot();
    });
});