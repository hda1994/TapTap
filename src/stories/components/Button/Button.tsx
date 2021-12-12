import React, {useState} from 'react';
import '../../styles/constants.css';
import './button.css';
import {Svg} from "../Svg/Svg";

interface ButtonProps {
    type?: 'primary' | 'outline' | 'ghost';
    danger?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    variants?: 'textOnly' | 'leftIcon' | 'rightIcon' | 'iconOnly';
    square?: boolean;
    svg?: any;
    label: string;
    onClick?: () => void;
}

export const Button = ({
                           type = 'primary',
                           danger = false,
                           disabled = false,
                           size = 'medium',
                           variants = 'textOnly',
                           square = true,
                           label = '',
                           svg,
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
                        {text}<Svg SvgComponent={svg} className={`${mode}--${type}-svg button--${size}-svg`}/>
                    </React.Fragment>
                );
            case 'leftIcon':
                return (
                    <React.Fragment>
                        <Svg SvgComponent={svg} className={`${mode}--${type}-svg button--${size}-svg`}/>{text}
                    </React.Fragment>
                );
            case 'iconOnly':
                return (
                    <React.Fragment>
                        <Svg SvgComponent={svg} className={`${mode}--${type}-svg button--${size}-svg`}/>
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
                square ? 'button--square' : 'button--round',
                'button',
                `button--${size}`,
                `${mode}--${type}`,
                pressed,
                variants === 'iconOnly' ? 'button--icon-only' : ''
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
