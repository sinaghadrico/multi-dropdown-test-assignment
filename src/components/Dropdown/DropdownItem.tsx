import { memo, FC } from 'react';
import { DropdownItemProps, DropdownOption } from './types';


const DropdownItem: FC<DropdownItemProps<DropdownOption>> = memo(({ option, isSelected, onToggleSelect }) => {
    return (
        <li
            key={option.value}
            className={`dropdown__list__item ${isSelected ? 'selected' : ''}`}
            onClick={() => onToggleSelect(option)}
            aria-selected={isSelected}
        >
            <span>
                {option.label}
                {option.icon && <img src={option.icon} alt={option.label} />}
            </span>
        </li>
    );
});

export default DropdownItem;
