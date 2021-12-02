import React, {useState} from 'react';
import '../../styles/constants.css';
import './toggle.css';

interface ToggleProps {
    checked?: boolean;
    disabled?: boolean;
    text?: boolean;
}

export const Toggle = ({
                           checked = false,
                           disabled = false,
                           text = false,
                           ...props
                       }: ToggleProps) => {
    const [isChecked, setIsChecked] = useState(checked);
    const onClickHandler = (event: any) => {
        event.preventDefault();
        if (!disabled) {
            setIsChecked(!isChecked);
        }
    }
    return (
        <label
            className={[
                'toggle--container',
                `${isChecked ? 'checked' : ''}`,
                `${text ? 'toggle--text-type' : ''}`,
                `${disabled ? 'disabled' : ''}`
            ].join(' ')}
            onClick={onClickHandler}>
            <input type="radio" className="toggle--input" checked={isChecked} disabled={disabled}/>
            <span className="toggle--checkmark">
                {text ?
                    <span className="toggle--text">{isChecked ? 'on' : 'off'}</span> :
                    null}
            </span>
        </label>
    );
};
