import React from 'react';
import { MdRemoveRedEye, MdDelete } from "react-icons/md";
import { IoPeopleCircleSharp } from "react-icons/io5";

interface ClientsMblType {
    pp: JSX.Element; // JSX.Element for JSX content
    sn: number;
    name: string;
    company: string;
    city: string;
    progress: React.ReactNode; // ReactNode for progress (JSX or string)
    createdDate: string;
}

const ClientsMbl = () => {
    const clients: ClientsMblType[] = [
        { pp: <IoPeopleCircleSharp className='h-20 w-20 rounded-full text-blue-600 bg-gray-400' />, sn: 1, name: "Howell Hand", company: "Percy Ltd", city: "New York", progress: <div className="bg-green-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium">70%</div>, createdDate: "Mar 3, 2023" },
        { pp: <IoPeopleCircleSharp className='h-20 w-20 rounded-full text-green-600 bg-gray-400' />, sn: 2, name: "Jennifer Claz", company: "Jenny co Ltd", city: "London", progress: <div className="bg-green-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium">82%</div>, createdDate: "Mar 3, 2023" },
        { pp: <IoPeopleCircleSharp className='h-20 w-20 rounded-full text-yellow-600 bg-gray-400' />, sn: 3, name: "Patrick Vessels", company: "Vessels LLC", city: "Paris", progress: <div className="bg-red-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium">35%</div>, createdDate: "Mar 3, 2023" },
        { pp: <IoPeopleCircleSharp className='h-20 w-20 rounded-full text-red-600 bg-gray-400' />, sn: 4, name: "Enrick Holand", company: "Markee Ltd", city: "Liverpool", progress: <div className="bg-green-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium">62%</div>, createdDate: "Mar 3, 2023" },
    ];

    return (
        <div className='flex flex-col gap-3 lg:hidden'>
            {clients.map((item, i) => (
                <div key={i} className='flex flex-col gap-[1px]'>
                    <div className='bg-white flex items-center justify-between p-2'>
                        <h1 className='font-medium'>Created</h1>
                        <p>{item.createdDate}</p>
                    </div>
                    
                    <div className='bg-white flex items-center justify-center p-2'>
                        {item.pp}
                    </div>
                    <div className='bg-white flex items-center justify-between p-2'>
                        <p className='font-medium'>Name</p>
                        <p>{item.name}</p>
                    </div>
                    <div className='bg-white flex items-center justify-between p-2'>
                        <p className='font-medium'>Company</p>
                        <p>{item.company}</p>
                    </div>
                    <div className='bg-white flex items-center justify-between p-2'>
                        <p className='font-medium'>City</p>
                        <p>{item.city}</p>
                    </div>
                    <div className='bg-white flex items-center justify-between p-2'>
                        <p className='font-medium'>Progress</p>
                        <p>{item.progress}</p>
                    </div>
                    <div className='bg-white flex items-center gap-2 p-2'>
                        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"><MdRemoveRedEye /></button>
                        <button className="bg-red-600 text-white p-2 rounded hover:bg-red-700"><MdDelete /></button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ClientsMbl;