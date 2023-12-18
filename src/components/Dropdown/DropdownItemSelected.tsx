import { memo, FC } from 'react';
import { DropdownItemProps, DropdownOption } from './types';

const DropdownItemSelected: FC<DropdownItemProps<DropdownOption>> = memo(({ option, onToggleSelect }) => {
    return (
        <li key={option.value} className={`dropdown__selected_list__item`} onClick={() => onToggleSelect(option)}>
            {option.label}
        </li>
    );
});

export default DropdownItemSelected;
