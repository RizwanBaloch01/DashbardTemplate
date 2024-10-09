'use client';

import { useState, useEffect, useRef } from 'react';
import { MdRemoveRedEye, MdDelete, MdDownload, MdMoreVert } from 'react-icons/md';
import { Bar } from 'react-chartjs-2'; // Import Bar component for bar chart
import { Chart, registerables } from 'chart.js'; // Import Chart and registerables
import Dropdown from './Dropdown'; // Ensure you have the Dropdown component

// Register all necessary components, including scales
Chart.register(...registerables); // This registers all scales, including CategoryScale

interface Report {
    id: number;
    title: string;
    date: string;
    status: string;
    type: string;
}

interface Customer {
    id: number;
    name: string;
    orders: number;
    totalSpend: string;
    lastPurchase: string;
}

const ReportsPage = () => {
    const [reports] = useState<Report[]>([
        { id: 1, title: 'Financial Report Q1 2024', date: 'Mar 1, 2024', status: 'Completed', type: 'Finance' },
        { id: 2, title: 'User Activity Report', date: 'Feb 20, 2024', status: 'In Progress', type: 'Activity' },
        { id: 3, title: 'Sales Report 2024', date: 'Jan 15, 2024', status: 'Completed', type: 'Sales' },
    ]);

    const [customers] = useState<Customer[]>([
        { id: 1, name: 'John Doe', orders: 15, totalSpend: '$5,000', lastPurchase: '2 days ago' },
        { id: 2, name: 'Jane Smith', orders: 12, totalSpend: '$3,800', lastPurchase: '1 week ago' },
        { id: 3, name: 'Alex Johnson', orders: 20, totalSpend: '$7,200', lastPurchase: '3 days ago' },
    ]);

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Sales',
                data: [1200, 1900, 3000, 5000, 6000, 7000],
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Change to background color for bar chart
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true, // Make the chart responsive
        maintainAspectRatio: false, // Allow the chart to stretch to its container
        scales: {
            x: {
                grid: {
                    display: false, // Optionally hide x-axis grid lines
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)', // Optionally set grid color for y-axis
                },
            },
        },
    };

    const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref for dropdown

    const [dropdownOpen, setDropdownOpen] = useState(false); // State to track dropdown visibility

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
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-semibold text-gray-800 mb-8">Reports</h1>

            {/* Reports Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-medium mb-4">Report Listings</h2>
                <table className="w-full table-auto overflow-x-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="text-left py-2 px-4">Title</th>
                            <th className="text-left py-2 px-4">Date</th>
                            <th className="text-left py-2 px-4">Status</th>
                            <th className="text-left py-2 px-4">Type</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report) => (
                            <tr key={report.id} className="border-t">
                                <td className="py-2 px-4">{report.title}</td>
                                <td className="py-2 px-4">{report.date}</td>
                                <td className="py-2 px-4">
                                    <span
                                        className={`px-2 py-1 rounded-full text-sm ${report.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                            }`}
                                    >
                                        {report.status}
                                    </span>
                                </td>
                                <td className="py-2 px-4">{report.type}</td>
                                <td className="py-2 px-4 flex gap-2">
                                    <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                                        <MdRemoveRedEye />
                                    </button>
                                    <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
                                        <MdDownload />
                                    </button>
                                    <button className="bg-red-600 text-white p-2 rounded hover:bg-red-700">
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Sales Trends Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex justify-between items-center">
                <h2 className="text-xl font-medium">Sales Trends</h2>
                <div ref={dropdownRef} className="relative">
                    <button
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        className="bg-gray-200 px-4 py-2 rounded">
                        Past Month
                    </button>
                    {dropdownOpen && (
                        <Dropdown
                            isOpen={dropdownOpen} // Pass the current state of the dropdown
                            toggleDropdown={() => setDropdownOpen((prev) => !prev)} // Pass function to toggle dropdown
                            options={['Last 7 Days', 'Last Month', 'Last 3 Months']}
                            onSelect={() => setDropdownOpen(false)} // Close dropdown on select
                        />
                    )}
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="relative w-full h-64"> {/* Set height for chart */}
                    <Bar data={chartData} options={chartOptions} /> {/* Change Line to Bar for bar chart */}
                </div>
            </div>

            {/* Top Customers Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex justify-between items-center">
                <h2 className="text-xl font-medium">Top Customers</h2>
                <div ref={dropdownRef} className="relative">
                    <button
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        className="bg-gray-200 px-4 py-2 rounded">
                        Sort By
                    </button>
                    {dropdownOpen && (
                        <Dropdown
                            isOpen={dropdownOpen} // Pass the current state of the dropdown
                            toggleDropdown={() => setDropdownOpen((prev) => !prev)} // Pass function to toggle dropdown
                            options={['Orders', 'Total Spend', 'Last Purchase']}
                            onSelect={() => setDropdownOpen(false)} // Close dropdown on select
                        />
                    )}
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="text-left py-2 px-4">Customer</th>
                            <th className="text-left py-2 px-4">Orders</th>
                            <th className="text-left py-2 px-4">Total Spend</th>
                            <th className="text-left py-2 px-4">Last Purchase</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id} className="border-t">
                                <td className="py-2 px-4">{customer.name}</td>
                                <td className="py-2 px-4">{customer.orders}</td>
                                <td className="py-2 px-4">{customer.totalSpend}</td>
                                <td className="py-2 px-4">{customer.lastPurchase}</td>
                                <td className="py-2 px-4 flex gap-2">
                                    <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                                        <MdMoreVert />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportsPage;