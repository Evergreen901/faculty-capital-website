import { useState } from 'react';

const CustomCheckbox = ({ className, checked, index, setChecked, label }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div
            className={`flex ${className} items-center cursor-pointer ${className}`}
            onClick={() => {
                checked[index] = 1 - checked[index];
                setChecked(checked);
                setIsChecked(checked[index]);
            }}
        >
            <div className={`border-[1px] border-blue-500 rounded-[4px] p-[2px] w-4 h-4`}>
                <div
                    className={`w-full h-full rounded-[2px] ${
                        isChecked ? 'bg-gradient-to-b from-cyan-500 to-blue-500' : ''
                    }`}
                />
            </div>
            <span className="font-bold ml-2">{label}</span>
        </div>
    );
};

export default CustomCheckbox;
