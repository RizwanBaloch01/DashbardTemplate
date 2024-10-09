'use client'; // Mark this component as a client component

import { useState } from 'react';

const Settings = () => {
    const [username, setUsername] = useState('W.W Heisanburg');
    const [email, setEmail] = useState('heisanburg@example.com');
    const [password, setPassword] = useState('');

    const handleSave = () => {
        // Here, you can make API calls to update user settings
        alert('Settings saved successfully!');
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-semibold text-gray-800 mb-8">Settings</h1>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-medium text-gray-700">Account Settings</h2>

                    <div className="flex flex-col gap-2">
                        <label className="text-gray-600">Username</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg p-2"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-gray-600">Email Address</label>
                        <input
                            type="email"
                            className="border border-gray-300 rounded-lg p-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-medium text-gray-700">Password & Security</h2>

                    <div className="flex flex-col gap-2">
                        <label className="text-gray-600">New Password</label>
                        <input
                            type="password"
                            className="border border-gray-300 rounded-lg p-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-gray-600">Confirm New Password</label>
                        <input
                            type="password"
                            className="border border-gray-300 rounded-lg p-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-medium text-gray-700">Notification Settings</h2>
                    <div className="flex items-center gap-3">
                        <input type="checkbox" id="email-notifications" className="h-4 w-4" />
                        <label htmlFor="email-notifications" className="text-gray-600">Email Notifications</label>
                    </div>

                    <div className="flex items-center gap-3">
                        <input type="checkbox" id="sms-notifications" className="h-4 w-4" />
                        <label htmlFor="sms-notifications" className="text-gray-600">SMS Notifications</label>
                    </div>
                </div>

                <div className="text-right">
                    <button
                        onClick={handleSave}
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;