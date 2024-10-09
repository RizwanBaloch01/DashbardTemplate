'use client';
import React, { useState } from 'react';
import { IoMdPeople } from "react-icons/io";
import { RiSettings3Fill } from "react-icons/ri";
import { MdRemoveRedEye, MdDelete } from "react-icons/md";

interface ClientsType {
    sn: number;
    name: string;
    company: string;
    city: string;
    progress: React.ReactNode;
    createdDate: string;
}

const Clients = () => {
    const clients: ClientsType[] = [
        { sn: 1, name: "Howell Hand", company: "Percy Ltd", city: "New York", progress: <div className="bg-green-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium">70%</div>, createdDate: "Mar 3, 2023" },
        { sn: 2, name: "Shane MCcmahon", company: "Marke Ltd", city: "Las Angles", progress: <div className="bg-green-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium">62%</div>, createdDate: "Feb 6, 2023" },
        { sn: 3, name: "John Luka", company: "Linkdo co", city: "Beijing", progress: <div className="bg-green-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium">83%</div>, createdDate: "Jan 7, 2024" },
        { sn: 4, name: "Arron Paul", company: "Paulbros", city: "Chicago", progress: <div className="bg-green-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium">51%</div>, createdDate: "Mar 23, 2023" },
        { sn: 5, name: "Arsene Lupin", company: "Percy Ltd", city: "New York", progress: <div className="bg-red-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium">33%</div>, createdDate: "Apr 3, 2024" },
        { sn: 6, name: "Howell Hand", company: "Percy Ltd", city: "New York", progress: <div className="bg-green-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium">94%</div>, createdDate: "Mar 3, 2023" },
        { sn: 7, name: "Sarah Paul", company: "SoftCorp", city: "London", progress: <div className="bg-yellow-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium">45%</div>, createdDate: "May 5, 2023" },
        { sn: 8, name: "Mike Dawson", company: "FinTech Ltd", city: "Berlin", progress: <div className="bg-red-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium">20%</div>, createdDate: "Jun 8, 2023" },
        { sn: 9, name: "Jane Doe", company: "LynTech", city: "Sydney", progress: <div className="bg-green-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium">88%</div>, createdDate: "Jul 10, 2023" },
    ];

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // 3 items per page

    const totalPages = Math.ceil(clients.length / itemsPerPage);

    // Get the clients for the current page
    const currentClients = clients.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className='p-4 hidden md:block'>
            <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center gap-2'>
                    <IoMdPeople className='h-6 w-6'/>
                    <p className='text-lg font-medium'>Clients</p>
                </div>
                <RiSettings3Fill className='h-5 w-5 bg-gray-300' />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">SN</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Company</th>
                            <th className="py-2 px-4 border-b">City</th>
                            <th className="py-2 px-4 border-b">Progress</th>
                            <th className="py-2 px-4 border-b">Created Date</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentClients.map((client, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b text-center">{client.sn}</td>
                                <td className="py-2 px-4 border-b">{client.name}</td>
                                <td className="py-2 px-4 border-b">{client.company}</td>
                                <td className="py-2 px-4 border-b">{client.city}</td>
                                <td className="py-2 px-4 border-b">{client.progress}</td>
                                <td className="py-2 px-4 border-b">{client.createdDate}</td>
                                <td className="py-2 px-4 border-b flex items-center gap-2">
                                    <button className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"><MdRemoveRedEye /></button>
                                    <button className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"><MdDelete /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                {/* Left side: page numbers */}
                <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`py-1 px-3 rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                {/* Right side: current page info */}
                <div>
                    <p className="text-sm text-gray-600">
                        Page {currentPage} of {totalPages}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Clients;
