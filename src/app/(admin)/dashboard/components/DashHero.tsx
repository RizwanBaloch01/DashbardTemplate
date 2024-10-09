'use client';
import React from 'react';
import { IoMdArrowDropup, IoMdArrowDropdown, IoMdCart, IoMdInformationCircleOutline } from "react-icons/io";
import { RiSettings3Fill } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";

interface DashHeroType {
    firstName: string;
    description: string;
    img: string; // Use string for image paths
}

const DashHero: React.FC = () => {
    const dashHero: DashHeroType[] = [
        {
            firstName: "NAME",
            description: "Description about team member",
            img: "/images/TeamMan.png",
        },
    ];

    return (
        <div>
            {dashHero.map((item, i) => (
                <div key={i} className='flex flex-col md:flex-row items-center justify-between gap-3'>
                    {/* Card 1 */}
                    <div className='flex items-center justify-between h-[158px] w-[330px] md:w-[230px] xl:w-[330px] bg-white rounded-xl'>
                        <div className='flex flex-col justify-between p-5 gap-4'>
                            <div className='flex items-center justify-between p-1 px-2 rounded-3xl text-gray-100 w-[68px] h-[26px] bg-green-500'>
                                <IoMdArrowDropup />
                                <p>12%</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-xl font-light'>Clients</p>
                                <h1 className='text-3xl font-semibold'>512</h1>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-between p-5 gap-8'>
                            <RiSettings3Fill className='h-5 w-5 bg-gray-300' />
                            <MdPeopleAlt className='text-green-500 h-12 w-12' />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='flex items-center justify-between h-[158px] w-[330px] md:w-[230px] xl:w-[330px] bg-white rounded-xl'>
                        <div className='flex flex-col justify-between p-5 gap-4'>
                            <div className='flex items-center justify-between p-1 px-2 rounded-3xl text-gray-100 w-[68px] h-[26px] bg-red-500'>
                                <IoMdArrowDropdown />
                                <p>12%</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-xl font-light'>Sales</p>
                                <h1 className='text-3xl font-semibold'>5,129</h1>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-between p-5 gap-8'>
                            <RiSettings3Fill className='h-5 w-5 bg-gray-300' />
                            <IoMdCart className='text-blue-500 h-12 w-12' />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='flex items-center justify-between h-[158px] w-[330px] md:w-[230px] xl:w-[330px] bg-white rounded-xl'>
                        <div className='flex flex-col justify-between p-5 gap-4'>
                            <div className='flex items-center justify-between p-1 px-2 rounded-3xl text-gray-100 w-[98px] h-[26px] bg-yellow-500'>
                                <IoMdInformationCircleOutline />
                                <p>Overflow</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-xl font-light'>Performance</p>
                                <h1 className='text-3xl font-semibold'>234%</h1>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-between p-5 gap-8'>
                            <RiSettings3Fill className='h-5 w-5 bg-gray-300' />
                            <IoAnalytics className='text-red-500 h-12 w-12' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashHero;