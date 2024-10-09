'use client'; // Mark this component as a client component

import { FC, useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { IoNotificationsCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

interface TopBarProps {
    toggleSidebar: () => void;
}

const TopBar: FC<TopBarProps> = ({ toggleSidebar }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="flex items-center justify-between h-16 w-full bg-gray-100 px-2 lg:px-16">
            {/* Hamburger Icon + Search Bar */}
            <div className="flex items-center gap-2 flex-grow">
                {/* Hamburger Icon for Sidebar Toggle */}
                <button
                    onClick={toggleSidebar}
                    aria-label="Toggle Sidebar"
                    className="text-gray-700 lg:hidden text-2xl"
                >
                    ≡
                </button>

                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 rounded text-gray-800 placeholder-gray-700"
                />
            </div>

            {/* For Mobile and Tablet */}
            <div className="md:hidden relative flex items-center">
                {/* Three Dots Icon */}
                <button
                    onClick={toggleMenu}
                    className="text-gray-800"
                    aria-label="Menu"
                >
                    <span className="text-2xl">•••</span>
                </button>

                {/* Sliding Menu */}
                {menuOpen && (
                    <div className="absolute top-0 right-0 h-96 w-52 bg-gray-800 shadow-lg z-20">
                        <div className="flex justify-between p-4">
                            <h2 className="text-white">Menu</h2>
                            <button onClick={toggleMenu} className="text-white">
                                ❌
                            </button>
                        </div>
                        {/* Links and Icons */}
                        <div className="flex flex-col p-3 gap-2 text-xl">
                            <button className="flex items-center gap-2 text-gray-100"><CgProfile /> Profile</button>
                            <button className="flex items-center gap-2 text-gray-100"><IoNotificationsCircleOutline /> Notifications</button>
                            <button className="flex items-center gap-2 text-gray-100"><TbBrandGoogleAnalytics /> Analytics</button>
                            <button className="flex items-center gap-2 text-gray-100"><IoSettingsOutline /> Settings</button>
                        </div>
                    </div>
                )}
            </div>

            {/* For Desktop */}
            <div className="hidden md:flex items-center justify-center gap-7 relative text-xl font-bold">
                <a href="#" className="text-gray-800">Link 1</a>
                <a href="#" className="text-gray-800">Link 2</a>

                <div className="flex items-center justify-center gap-7">
                    <button className="text-gray-700"><CgProfile /></button>
                    <button className="text-gray-700"><IoNotificationsCircleOutline /></button>
                    <button className="text-gray-700"><TbBrandGoogleAnalytics /></button>
                    <button className="text-gray-700"><IoSettingsOutline /></button>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
