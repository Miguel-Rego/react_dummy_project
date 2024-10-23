// TreeView.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import TreeView from './TreeView';
import { generateDirectoryData } from './dataGenerator';

describe('TreeView Component', () => {
    const directoryData = generateDirectoryData(3, 5); // Example data

    it('renders correctly with given data', () => {
        const { getByText } = render(<TreeView directoryData={directoryData} />);

        // Use regex to match text (still doesn't work)
        expect(getByText(/Portugal/i)).toBeInTheDocument();
        expect(getByText(/France/i)).toBeInTheDocument();
    });
});
