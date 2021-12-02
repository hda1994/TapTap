import React, {useState} from 'react';
import '../../styles/constants.css';
import './checkbox.css';

// import styles from './Button.module.css';

interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    label: string;
}

export const Checkbox = ({
                             checked = false,
                             disabled = false,
                             label = '',
                             ...props
                         }: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(checked);
    const [pressed, setPressed] = useState(false);
    const onClickHandler = (event: any) => {
        event.preventDefault();
        if(!disabled) {
            setIsChecked(!isChecked);
        }
    }
    const onPressHandler = (press: boolean) => {
        if(!disabled) {
            setPressed(press);
        }
    }
    return (
        <label
            className={[
                'checkbox--container',
                `${isChecked ? 'checked' : ''}`,
                `${pressed ? 'pressed' : ''}`,
                `${disabled ? 'disabled' : ''}`
            ].join(' ')}
            onClick={onClickHandler}
            onMouseDown={() => onPressHandler(true)}
            onMouseUp={() => onPressHandler(false)}
            onMouseOut={() => onPressHandler(false)}>
            {label}
            <input type="checkbox" className="checkbox--input" checked={isChecked} disabled={disabled}/>
            <span className="checkbox--checkmark"/>
        </label>
    );
};
