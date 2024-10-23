import React from 'react';
import TreeView from './TreeView';
import { generateDirectoryData } from './dataGenerator';
import './App.css';

const App: React.FC = () => {
    // Generate the dynamic directory structure
    const directoryData = generateDirectoryData(3, 5); // 3 activities, 5 workstations per activity

    return (
        <div className="app-container">
            {/* Global Header */}
            <header className="app-header">
                <h1>Header</h1>
            </header>

            {/* Main Content and Side Panel */}
            <div className="main-content-container">
                <div className="content">
                    <h2>Main Content</h2>
                    <p>Picture, Identification, etc</p>
                </div>

                <div className="side-panel">
                    <h2>Qualité</h2>
                    <TreeView directoryData={directoryData} />
                </div>
            </div>
        </div>
    );
};

export default App;
