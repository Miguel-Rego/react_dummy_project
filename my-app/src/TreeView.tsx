import React, { useState } from 'react';

interface TreeNodeProps {
    name: string;
    children?: TreeNodeProps[];
}

interface TreeViewProps {
    directoryData: TreeNodeProps[];
}

const TreeView: React.FC<TreeViewProps> = ({ directoryData }) => {
    const [expandedNodes, setExpandedNodes] = useState<string[]>([]);

    const toggleExpand = (nodeName: string) => {
        setExpandedNodes((prev) =>
            prev.includes(nodeName) ? prev.filter((n) => n !== nodeName) : [...prev, nodeName]
        );
    };

    const renderNode = (node: TreeNodeProps) => {
        const isExpanded = expandedNodes.includes(node.name);
        const hasChildren = node.children && node.children.length > 0;

        return (
            <div key={node.name} style={{ marginLeft: 20 }}>
                <div onClick={() => hasChildren && toggleExpand(node.name)} style={{ cursor: hasChildren ? 'pointer' : 'default' }}>
                    {hasChildren ? (isExpanded ? '[-]' : '[+]') : '-'} {node.name}
                </div>
                {isExpanded && hasChildren && (
                    <div>
                        {node.children!.map((child) => renderNode(child))}
                    </div>
                )}
            </div>
        );
    };

    return <div>{directoryData.map((node) => renderNode(node))}</div>;
};

export default TreeView;
