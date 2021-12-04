import React from 'react';
import '../../styles/constants.css';
import './tooltips.css';

interface TooltipsProps {
    children?: any;
    text?: string;
    placement?: 'bottom-left'
        | 'bottom-right'
        | 'bottom'
        | 'left-top'
        | 'left-bottom'
        | 'left'
        | 'right-top'
        | 'right-bottom'
        | 'right'
        | 'top-left'
        | 'top-right'
        | 'top';
}

export const Tooltips = ({
                             placement = 'bottom-left',
                             text,
                             children,
                             ...props
                         }: TooltipsProps) => {

    return (
        <div className='tooltips--container'>
            {children}
            <div className={`tooltips--popup ${placement}`}>{text}
            </div>
        </div>
    );
};
