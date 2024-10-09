'use client';

import { useState, useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Dropdown from './Dropdown'; // Ensure this path is correct

// Register all necessary components, including scales
Chart.register(...registerables);

const Analytics = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Last 30 Days');
    const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref for dropdown

    // Sample chart data (this should be updated based on the selected option)
    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: [1200, 1900, 3000, 5000, 6000, 7000],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Expenses',
                data: [800, 1500, 2500, 4000, 4500, 6000],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };

    // Update selected option and close dropdown
    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setDropdownOpen(false);
        // Update chart data here based on the selected option if needed
    };

    // Close dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col">
            <h1 className="text-3xl font-semibold text-gray-800 mb-8">Analytics</h1>

            {/* Dropdown for time period selection */}
            <div ref={dropdownRef} className="relative mb-6">
                <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="bg-gray-200 px-4 py-2 rounded">
                    {selectedOption}
                </button>
                <Dropdown
                    options={['Last 7 Days', 'Last 30 Days', 'Last 3 Months']}
                    onSelect={handleSelect}
                    isOpen={dropdownOpen}
                />
            </div>

            {/* Chart Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex-grow">
                <h2 className="text-xl font-medium mb-4">Sales and Expenses Overview</h2>
                <div style={{ height: '400px' }}>
                    <Bar
                        data={chartData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                x: {
                                    grid: {
                                        display: false,
                                    },
                                },
                                y: {
                                    beginAtZero: true,
                                    grid: {
                                        color: '#e0e0e0',
                                    },
                                },
                            },
                        }}
                    />
                </div>
            </div>

            {/* Key Metrics Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">Total Sales</h3>
                    <p className="text-2xl text-gray-800">$25,000</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">Total Expenses</h3>
                    <p className="text-2xl text-gray-800">$15,000</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">Net Profit</h3>
                    <p className="text-2xl text-gray-800">$10,000</p>
                </div>
            </div>

            {/* Data Table Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h2 className="text-xl font-medium mb-4">Recent Transactions</h2>
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="text-left py-2 px-4">Date</th>
                            <th className="text-left py-2 px-4">Description</th>
                            <th className="text-left py-2 px-4">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4">01/10/2024</td>
                            <td className="py-2 px-4">Sale</td>
                            <td className="py-2 px-4">$500</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4">01/05/2024</td>
                            <td className="py-2 px-4">Expense</td>
                            <td className="py-2 px-4">-$200</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Analytics;