// dataGenerator.ts
export function generateDirectoryData(numActivities: number, numWorkstations: number) {
    // Define regions and their respective sites
    const regions = {
        Portugal: ['HUB st Nazaire', 'Hub st Paz'],
        France: ['Gron Site']
    };

    const directoryData: any[] = [];

    // Loop through regions
    Object.entries(regions).forEach(([regionName, sites]) => {
        const region: any = { name: regionName, children: [] };

        sites.forEach((siteName) => {
            const activities: any[] = [];

            // Generate activities and workstations for each site
            for (let j = 0; j < numActivities; j++) {
                const activityName = `Activity A${280 + j}`;
                const workstations: any[] = [];

                for (let k = 0; k < numWorkstations; k++) {
                    const workstationName = `PT${Math.floor(100000 + Math.random() * 900000)}`;
                    workstations.push({ name: workstationName });
                }

                activities.push({
                    name: activityName,
                    children: workstations,
                });
            }

            region.children.push({
                name: siteName,
                children: activities,
            });
        });

        directoryData.push(region);
    });

    return directoryData;
}
