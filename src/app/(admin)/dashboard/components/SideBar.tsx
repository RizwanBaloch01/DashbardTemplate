'use client'; // Mark this component as a client component

import { FC } from 'react';
import Link from 'next/link';
import { FaDisplay } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSettings, MdOutlineCircleNotifications, MdOutlineSupport } from "react-icons/md";
import { TbReportSearch, TbBrandGoogleAnalytics } from "react-icons/tb";

interface SideBarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const SideBar: FC<SideBarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            {/* SideBar */}
            <aside
                className={`fixed inset-0 z-50 transition-transform duration-300 transform bg-gray-900 text-white w-52 lg:w-[288px] lg:relative lg:translate-x-0 flex flex-col justify-between h-screen ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div>
                    <div className="flex items-center justify-between lg:items-center lg:justify-center h-10 bg-gray-700 px-4">
                        <h1 className="text-xl font-bold text-center">Admin</h1>
                        {/* Close button visible only on mobile and tablet */}
                        <button
                            onClick={toggleSidebar}
                            aria-label="Close SideBar"
                            className="text-white md:hidden text-2xl"
                        >
                            &times; {/* Close icon */}
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 overflow-y-auto">
                        <ul className="flex flex-col p-1 gap-1 h-[512px]">
                            <li><Link href="/dashboard" className="flex items-center gap-5 p-2 hover:bg-gray-700 rounded"><FaDisplay /> Dashboard</Link></li>
                            <li><Link href="/dashboard/profile" className="flex items-center gap-5 p-2 hover:bg-gray-700 rounded"><CgProfile /> Profile</Link></li>
                            <li><Link href="/dashboard/settings" className="flex items-center gap-5 p-2 hover:bg-gray-700 rounded"><MdOutlineSettings /> Settings</Link></li>
                            <li><Link href="/dashboard/notifications" className="flex items-center gap-5 p-2 hover:bg-gray-700 rounded"><MdOutlineCircleNotifications /> Notifications</Link></li>
                            <li><Link href="/dashboard/reports" className="flex items-center gap-5 p-2 hover:bg-gray-700 rounded"><TbReportSearch /> Reports</Link></li>
                            <li><Link href="/dashboard/analytics" className="flex items-center gap-5 p-2 hover:bg-gray-700 rounded"><TbBrandGoogleAnalytics /> Analytics</Link></li>
                            <li><Link href="/#" className="flex items-center gap-5 p-2 hover:bg-gray-700 rounded"><MdOutlineSupport /> Support</Link></li>

                            <li><Link href="/#" className="flex items-center gap-5 p-2 hover:bg-gray-700 rounded"><CgProfile /> Profile</Link></li>
                            <li><Link href="/#" className="flex items-center gap-5 p-2 hover:bg-gray-700 rounded"><MdOutlineSettings /> Settings</Link></li>
                            <li><Link href="/#" className="flex items-center gap-5 p-2 hover:bg-gray-700 rounded"><MdOutlineCircleNotifications /> Notifications</Link></li>
                            <li><Link href="/#" className="flex items-center gap-5 p-2 hover:bg-gray-700 rounded"><TbReportSearch /> Reports</Link></li>
                            <li><Link href="/#" className="flex items-center gap-5 p-2 hover:bg-gray-700 rounded"><TbBrandGoogleAnalytics /> Analytics</Link></li>
                            <li><Link href="/#" className="flex items-center gap-5 p-2 hover:bg-gray-700 rounded"><MdOutlineSupport /> Support</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* Logout Link */}
                <div className="p-4 border-t border-gray-700 bg-gray-950 w-full">
                    <Link href="/#" className="block text-red-500 rounded text-center">
                        Logout
                    </Link>
                </div>
            </aside>
        </>
    );
};

export default SideBar;
