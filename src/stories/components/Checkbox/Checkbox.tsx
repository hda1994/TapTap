import React, {useState} from 'react';
import '../../styles/constants.css';
import './checkbox.css';

// import styles from './Button.module.css';

interface CheckboxProps {
    disabled?: boolean;
    label: string;
}

export const Checkbox = ({
                             disabled = false,
                             label = '',
                             ...props
                         }: CheckboxProps) => {
    const [pressed, setPressed] = useState('');
    return (
        <label className="checkbox--container">
            {label}
            <input type="checkbox" className="checkbox--input"/>
            <span className="checkbox--checkmark"/>
        </label>
    );
};
