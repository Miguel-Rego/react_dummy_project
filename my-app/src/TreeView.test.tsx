import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TreeView from './TreeView';
import { generateDirectoryData } from './dataGenerator';

describe('TreeView Component', () => {
    const directoryData = generateDirectoryData(3, 5); // Example

    it('renders correctly with given data', () => {
        const { getByText, queryAllByText } = render(<TreeView directoryData={directoryData} />);

        // Expand Portugal to make its sites visible
        const portugalNode = getByText(/Portugal/i);
        fireEvent.click(portugalNode); // Expand Portugal Node

        // Check for the sites
        expect(getByText(/HUB st Nazaire/i)).toBeInTheDocument();
        expect(getByText(/Hub st Paz/i)).toBeInTheDocument();

        // Expand HUB st Nazaire to make its activities and workstations visible
        const hubNazaireNode = getByText(/HUB st Nazaire/i);
        fireEvent.click(hubNazaireNode);

        // Check for activities under HUB st Nazaire
        expect(getByText(/Activity A280/i)).toBeInTheDocument();
        expect(getByText(/Activity A281/i)).toBeInTheDocument();
        expect(getByText(/Activity A282/i)).toBeInTheDocument();

        // Check for workstations under Activity A280
        const workstationA280Node = getByText(/Activity A280/i);
        fireEvent.click(workstationA280Node); // Expand Activity A280 to see workstations
        const workstationsA280 = queryAllByText(/PT[0-9]{6}/); // Get all matching workstations
        expect(workstationsA280.length).toBeGreaterThan(0); // Assert at least one workstation is present
    });

    it('renders France region correctly', () => {
        const { getByText, queryAllByText } = render(<TreeView directoryData={directoryData} />);

        // Expand France to make its sites visible
        const franceNode = getByText(/France/i);
        fireEvent.click(franceNode); // Simulate expanding the France node

        // Now check for the sites in France
        expect(getByText(/Gron Site/i)).toBeInTheDocument();

        // Expand Gron Site to make its activities and workstations visible
        const gronSiteNode = getByText(/Gron Site/i);
        fireEvent.click(gronSiteNode); // Expand Gron Site

        // Check for activities under Gron Site
        expect(getByText(/Activity A280/i)).toBeInTheDocument();
        expect(getByText(/Activity A281/i)).toBeInTheDocument();

        // Check for workstations under Activity A280
        const workstationGronNode = getByText(/Activity A280/i);
        fireEvent.click(workstationGronNode); // Expand one activity
        const workstationsGron = queryAllByText(/PT[0-9]{6}/); // Get matching workstations
        expect(workstationsGron.length).toBeGreaterThan(0); // Assert at least one workstation is present
    });
});
