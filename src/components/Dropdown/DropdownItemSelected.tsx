import { memo, FC } from 'react';
import { DropdownItemProps, DropdownOption } from './types';

const DropdownItemSelected: FC<DropdownItemProps<DropdownOption>> = memo(({ option, isSelected, onToggleSelect }) => {
    return (
        <li
            key={option.value}
            className={`dropdown__selected_list__item ${isSelected ? 'selected' : ''}`}
            onClick={() => onToggleSelect(option)}
            aria-selected={isSelected}
        >
            {option.label}
        </li>
    );
});

export default DropdownItemSelected;
