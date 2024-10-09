// Dropdown.tsx
import React from 'react';

interface DropdownProps {
    options: string[];
    onSelect: (option: string) => void;
    isOpen: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, isOpen }) => {
    return (
        <div className={`absolute bg-white shadow-lg rounded mt-1 z-10 ${isOpen ? '' : 'hidden'}`}>
            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => onSelect(option)}
                    className="block px-4 py-2 text-left w-full hover:bg-gray-200">
                    {option}
                </button>
            ))}
        </div>
    );
};

export default Dropdown;
