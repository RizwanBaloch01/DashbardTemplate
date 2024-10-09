'use client';
import React, { useState } from 'react';
import { FaCamera, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image'; // Import Image component from next/image

interface SocialLink {
    platform: string;
    icon: React.ReactNode;
    link: string;
}
interface ProfileType {
    name: string;
    profession: string;
    description: string;
}

const Profile = () => {
    const [coverPhoto, setCoverPhoto] = useState<string | null>(null);
    const [profilePhoto, setProfilePhoto] = useState<string | null>(null);

    const socialLinks: SocialLink[] = [
        { platform: 'Instagram', icon: <FaInstagram />, link: 'https://instagram.com/username' },
        { platform: 'Facebook', icon: <FaFacebook />, link: 'https://facebook.com/username' },
        { platform: 'WhatsApp', icon: <FaWhatsapp />, link: 'https://wa.me/1234567890' },
    ];

    const profileData: ProfileType = {
        name: 'W.W Heisenburg',
        profession: 'Web Developer',
        description: 'Passionate developer with experience in building scalable web applications using modern technologies like React, Next.js, and Node.js.',
    };

    // Function to handle cover image upload
    const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setCoverPhoto(URL.createObjectURL(file));
        }
    };

    // Function to handle profile image upload
    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setProfilePhoto(URL.createObjectURL(file));
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-5 p-4">
            {/* Cover Photo */}
            <div className="relative">
                <Image
                    src={coverPhoto || 'https://via.placeholder.com/800x300'}
                    alt="Cover"
                    width={800}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                />
                <label className="absolute top-2 right-2 cursor-pointer bg-black bg-opacity-50 p-2 rounded-full">
                    <FaCamera className="text-white" />
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleCoverChange}
                    />
                </label>
            </div>

            {/* Profile Section */}
            <div className="relative -mt-16 flex justify-center">
                <div className="relative">
                    <Image
                        src={profilePhoto || 'https://via.placeholder.com/150'}
                        alt="Profile"
                        width={150}
                        height={150}
                        className="h-32 w-32 rounded-full object-cover border-4 border-white"
                    />
                    <label className="absolute bottom-0 right-0 cursor-pointer bg-black bg-opacity-50 p-2 rounded-full">
                        <FaCamera className="text-white" />
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleProfileChange}
                        />
                    </label>
                </div>
            </div>

            <div className="text-center mt-4">
                <h2 className="text-2xl font-bold">{profileData.name}</h2>
                <p className="text-gray-500">{profileData.profession}</p>
                <p className="mt-4 text-gray-600">{profileData.description}</p>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-blue-500"
                        aria-label={link.platform}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Profile;
