'use client';
import React from 'react';
import { IoPeopleCircleSharp } from "react-icons/io5";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";

interface ClientProType {
    name: string;
    time: string;
    img: JSX.Element; // Use JSX.Element for JSX content
    btn: JSX.Element; // Use JSX.Element for JSX content
}

const ClientPro = () => {
    const clientPro: ClientProType[] = [
        {
            img: <IoPeopleCircleSharp className='h-12 w-12 rounded-full text-red-600' />,
            name: "Howell Hand", 
            time: "Mar 3, 2023 @ percy64", 
            btn: <div className='bg-green-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium'>
                    <BsGraphUpArrow className='h-3 w-3 font-medium' /> 70%
                 </div>,
        },
        {
            img: <IoPeopleCircleSharp className='h-12 w-12 rounded-full text-yellow-600' />,
            name: "Shaw shank", 
            time: "Dec 1, 2023 @ Shaws110", 
            btn: <div className='bg-green-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium'>
                    <BsGraphUpArrow className='h-3 w-3 font-medium' /> 63%
                 </div>,
        },
        {
            img: <IoPeopleCircleSharp className='h-12 w-12 rounded-full text-blue-600' />,
            name: "Anglica dupe", 
            time: "Feb 1, 2024 @ Angelica.conce", 
            btn: <div className='bg-yellow-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium'>
                    <IoIosArrowRoundForward className='h-3 w-3 font-medium' /> 63%
                 </div>,
        },
        {
            img: <IoPeopleCircleSharp className='h-12 w-12 rounded-full text-brown-600' />,
            name: "Hassan Abbas", 
            time: "Sep 24, 2024 @ HAbbas.zawar", 
            btn: <div className='bg-red-600 py-1 rounded-full px-3 text-sm text-gray-200 flex gap-1 items-center justify-center font-medium'>
                    <BsGraphDownArrow className='h-3 w-3 font-medium' /> 63%
                 </div>,
        },
        // Add more members as needed
    ];
    return (
        <div className='flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-4'>
            {clientPro.map((item, i) => (
                <div key={i}>
                    <div className='w-[315px] md:w-[500px] lg:w-[350px] xl:w-[500px] bg-white flex flex-col items-center justify-center rounded-xl'>
                        <div className='flex flex-col md:flex-row items-center justify-between gap-6 p-3 lg:p-2'>
                            <div className='h-12 w-12 flex items-center justify-center rounded-full bg-gray-100'>
                                {item.img}
                            </div>
                            <div className='flex items-center justify-between gap-7'>
                                <div className='flex flex-col items-center  md:items-start justify-center'>
                                    <p className='font-medium'>{item.name}</p>
                                    <p className=''>{item.time}</p>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-1'>
                                    <button className=''>
                                        {item.btn}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ClientPro;