import React, {useState} from 'react';
import '../../styles/constants.css';
import './button.css';
import {Svg} from "../Svg/Svg";

// import styles from './Button.module.css';

interface ButtonProps {
    type?: 'primary' | 'outline' | 'ghost';
    danger?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    variants?: 'textOnly' | 'leftIcon' | 'rightIcon';
    label: string;
    onClick?: () => void;
}

export const Button = ({
                           type = 'primary',
                           danger = false,
                           disabled = false,
                           size = 'medium',
                           variants = 'textOnly',
                           label = '',
                           ...props
                       }: ButtonProps) => {
    const buttonVariant = (text: string) => {
        switch (variants) {
            case 'textOnly':
                return (
                    <React.Fragment>
                        {text}
                    </React.Fragment>
                );
            case 'rightIcon':
                return (
                    <React.Fragment>
                        {text}<Svg className={`${mode}--${type}-svg button--${size}-svg`}/>
                    </React.Fragment>
                );
            case 'leftIcon':
                return (
                    <React.Fragment>
                        <Svg className={`${mode}--${type}-svg button--${size}-svg`}/>{text}
                    </React.Fragment>
                );
        }
    }

    const mode = danger ? 'button-danger' : 'button';
    const [pressed, setPressed] = useState('');
    return (
        <button
            type="button"
            className={[
                'button',
                `button--${size}`,
                `${mode}--${type}`,
                pressed
            ].join(' ')}
            onMouseDown={() => setPressed('pressed')}
            onMouseUp={() => setPressed('')}
            onMouseOut={() => setPressed('')}
            disabled={disabled}
            {...props}
        >
            {buttonVariant(label)}
        </button>
    );
};
