
import { Dropdown } from 'components/Dropdown';
import { DropdownOption } from 'components/Dropdown/types';
import { useState } from 'react';

const App: React.FC = () => {
    const initialOptions = [
        { value: 'education', label: 'Education', icon: 'https://source.unsplash.com/random/200x200?sig=1' },
        { value: 'art', label: 'Art', icon: 'https://source.unsplash.com/random/200x200?sig=2' },
    ];
    const [options, setOptions] = useState(initialOptions);
    const [selectedOptions, setSelectedOptions] = useState([options[0]]);

    const handleAddOption = (value: string) => {
        if (options.some((option) => option.value === value.trim())) {
            console.warn('Option already exists');
            return;
        }
        const newOption :DropdownOption = {
            label: value,
            value: value.trim(),
            icon: `https://source.unsplash.com/random/200x200?sig=${options.length + 1}`,
        };
        setOptions((prevOptions) => [...prevOptions, newOption]);
    };
    return (
        <div className="main-contain">
            <Dropdown
                value={selectedOptions}
                options={options}
                placeholder="Please select or add option"
                onChange={setSelectedOptions}
                onAddOption={handleAddOption}
            />
        </div>
    );
};

export default App;
