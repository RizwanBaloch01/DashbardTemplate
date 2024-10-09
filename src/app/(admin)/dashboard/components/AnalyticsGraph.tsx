'use client';

import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components you need
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AnalyticsGraph: FC = () => {
    // Sample data for the chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Website Visits',
                data: [65, 59, 80, 81, 56, 55, 40], // Example data points
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true, // Ensures the chart resizes with the container
        maintainAspectRatio: false, // Allows the chart to adapt to any height/width changes
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className='fkex flex-col items-center justify-center'>
            <div className="bg-white p-4 rounded shadow-md w-full max-w-[90%] lg:max-w-[75%] xl:lg:max-w-[90%] h-auto">
                <h2 className="text-lg font-bold mb-4">Analytics Overview</h2>
                {/* Set a responsive height */}
                <div className="relative h-[300px] lg:h-[400px]">
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default AnalyticsGraph;
