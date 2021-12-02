import React, {useState} from 'react';
import '../../styles/constants.css';
import './iconButton.css';
import {Svg} from "../Svg/Svg";
// import * as svg from '../../assets';
// import { ReactSVG } from 'react-svg';
// import styles from './IconButton.module.css';

interface IconButtonProps {
    type?: 'primary' | 'outline' | 'ghost';
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    variants?: 'round' | 'square';
    label: string;
    onClick?: () => void;
}

export const IconButton = ({
                               type = 'primary',
                               disabled = false,
                               size = 'medium',
                               variants = 'round',
                               label,
                               ...props
                           }: IconButtonProps) => {
    const [pressed, setPressed] = useState('');
    return (
        <button
            type="button"
            className={[
                'icon-button',
                `icon-button--${type}`,
                `icon-button--${size}`,
                pressed
            ].join(' ')}
            onMouseDown={() => setPressed('pressed')}
            onMouseUp={() => setPressed('')}
            onMouseOut={() => setPressed('')}
            disabled={disabled}
            {...props}
        >
            {label}
        </button>
    );
};
