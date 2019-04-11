// Test away!
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';

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

    it('matches the snapshot', () => {
        const tree = renderer.create(<Controls />)
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('renders the button to unlock the gate', () => {
        const { getByText } = render(<Controls locked={true} />);
        getByText('Unlock Gate');
    });

    it('renders the button to lock the gate', () => {
        const { getByText } = render(<Controls locked={false} />);
        getByText('Lock Gate');
    });

    it('renders the button to open the gate', () => {
        const { getByText } = render(<Controls closed={true} />);
        getByText('Open Gate');
    });

    it('renders the button to close the gate', () => {
        const { getByText } = render(<Controls closed={false} />);
        getByText('Close Gate');
    });

    it('keeps the close toggle button disabled when the gate is closed', () => {
        const { getByText } = render(<Controls locked={true} />);
        expect(getByText('Close Gate', { selector: 'button.toggle-btn' }).disabled).toBe(true);
    });
});