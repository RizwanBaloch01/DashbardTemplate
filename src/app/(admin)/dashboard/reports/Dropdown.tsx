interface DropdownProps {
    isOpen: boolean;
    toggleDropdown: () => void;
    options: string[];
    onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, toggleDropdown, options, onSelect }) => {
    if (!isOpen) return null; // Render nothing if dropdown is closed

    return (
        <div className="absolute mt-2 bg-white shadow-lg rounded">
            <ul>
                {options.map((option) => (
                    <li
                        key={option}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                            onSelect(option);
                            toggleDropdown(); // Close dropdown on select
                        }}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;