import React, {useState} from 'react';
import '../../styles/constants.css';
import './textarea.css';

// import styles from './Button.module.css';

interface TextareaProps {
    placeholder?: string;
    text?: string;
    disabled?: boolean;
    label: string;
}

export const Textarea = ({
                             placeholder = 'Enter your text, please...',
                             disabled = false,
                             text = '',
                             label = '',
                             ...props
                         }: TextareaProps) => {

    return (
        <textarea className={'textarea'} placeholder={placeholder}>{text}</textarea>
    );
};
