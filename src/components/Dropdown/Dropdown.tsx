import { DropdownOption, DropdownProps } from './types';
import { useDropdown } from './useDropdown';
import './Dropdown.scss';
import DropdownItem from './DropdownItem';
import { FC } from 'react';
import ArrowUp from 'assets/icons/ArrowUp';
import DropdownItemSelected from './DropdownItemSelected';

const Dropdown: FC<DropdownProps<DropdownOption>> = (props) => {
    const { placeholder } = props;
    const { options, selectedOptions, isOpen, dropdownRef, setIsOpen, handleInputKeyDown, toggleSelect } =
        useDropdown(props);

    return (
        <div className={`dropdown ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
            <ul className="dropdown__selected_list">
                {(selectedOptions.length > 1 ? [selectedOptions[0]] : selectedOptions).map((option) => {
                    const isSelected: boolean = selectedOptions.some(
                        (selectedOption) => selectedOption.value === option.value,
                    );
                    return (
                        <DropdownItemSelected
                            key={option.value}
                            option={option}
                            isSelected={isSelected}
                            onToggleSelect={toggleSelect}
                        />
                    );
                })}
            </ul>
            {selectedOptions.length > 1 && <span>...</span>}
            <input
                type="text"
                className={`dropdown__input ${isOpen ? 'open' : ''}`}
                onKeyDown={handleInputKeyDown}
                onFocus={() => setIsOpen(true)}
                placeholder={placeholder}
            />
            <div className={`dropdown__arrow ${isOpen ? 'open' : ''}`}>
                <ArrowUp />
            </div>
            {isOpen && (
                <ul className="dropdown__list">
                    {options.map((option) => {
                        const isSelected: boolean = selectedOptions.some(
                            (selectedOption) => selectedOption.value === option.value,
                        );
                        return (
                            <DropdownItem
                                key={option.value}
                                option={option}
                                isSelected={isSelected}
                                onToggleSelect={toggleSelect}
                            />
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
