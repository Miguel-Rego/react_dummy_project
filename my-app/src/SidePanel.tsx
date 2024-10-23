import React from 'react';
import './SidePanel.css';

const SidePanel: React.FC = () => {
    // Business objects
    const businessObjects = [
        { id: 1, name: 'Region' },
        { id: 2, name: 'Site' },
        { id: 3, name: 'Activity' },
        { id: 4, name: 'Workstation' }
    ];

    return (
        <div className="side-panel">
            <div className="panel-content">
                <h3>Directories</h3>
                <ul>
                    {businessObjects.map((obj) => (
                        <li key={obj.id}>{obj.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SidePanel;
