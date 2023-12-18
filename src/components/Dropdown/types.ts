export interface DropdownOption {
    value: string;
    label: string;
    icon: string;
}

export interface DropdownProps<TType> {
    value: TType[];
    options: TType[];
    placeholder?: string;
    onChange?(value: TType[]): void;
    onAddOption?(value: string): void;
}

export interface DropdownItemProps<TType> {
    option: TType;
    isSelected: boolean;
    onToggleSelect: (option: TType) => void;
}