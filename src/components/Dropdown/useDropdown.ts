import { useState, useRef, useCallback } from 'react';
import { DropdownOption, DropdownProps } from './types';
import { useOnClickOutside } from 'hooks/useOnClickOutside';

export const useDropdown = ({
    options,
    value: selectedOptions,
    onChange,
    onAddOption,
}: DropdownProps<DropdownOption>) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const toggleSelect = useCallback(
        (option: DropdownOption) => {
            if (selectedOptions.some((selected) => selected.value === option.value)) {
                const newOptionsSelected = selectedOptions.filter((selected) => selected.value !== option.value);
                onChange && onChange(newOptionsSelected);
            } else {
                const newOptionsSelected = [...selectedOptions, option];
                onChange && onChange(newOptionsSelected);
            }
        },
        [selectedOptions],
    );

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && event.currentTarget.value.trim()) {
            onAddOption && onAddOption(event.currentTarget.value);
            if (inputRef.current && inputRef.current.children[1]) {
                inputRef.current.value = '';
            }
        }
    };
    const toggleOpen= ()=>{
        setIsOpen(!isOpen);
    }

    useOnClickOutside(dropdownRef, () => {
        setIsOpen(false);
    });

    return { options, selectedOptions, isOpen, inputRef, dropdownRef, toggleOpen, handleInputKeyDown, toggleSelect };
};
