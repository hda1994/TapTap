import React, {useState} from 'react';
import '../../styles/constants.css';
import './radio.css';

interface RadioProps {
    checked?: boolean;
    disabled?: boolean;
    label: string;
}

export const Radio = ({
                             checked = false,
                             disabled = false,
                             label = '',
                             ...props
                         }: RadioProps) => {
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
                'radio--container',
                `${isChecked ? 'checked' : ''}`,
                `${pressed ? 'pressed' : ''}`,
                `${disabled ? 'disabled' : ''}`
            ].join(' ')}
            onClick={onClickHandler}
            onMouseDown={() => onPressHandler(true)}
            onMouseUp={() => onPressHandler(false)}
            onMouseOut={() => onPressHandler(false)}>
            {label}
            <input type="radio" className="radio--input" checked={isChecked} disabled={disabled}/>
            <span className="radio--checkmark"/>
        </label>
    );
};
