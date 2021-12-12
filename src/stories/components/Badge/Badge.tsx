import React from 'react';
import '../../styles/constants.css';
import './badge.css';

interface BadgeProps {
    dot?: boolean;
    count?: number | null;
    children: any
}

export const Badge = ({
                          dot = true,
                          count = null,
                          children,
                          ...props
                      }: BadgeProps) => {
    return (
        <span className='badge--wrapper'>
            {children}
            <div className={`badge badge--${dot ? 'dot' : 'number'}`}>
                {dot ? null : count}
            </div>
        </span>
    );
};
