import React from 'react';

interface SvgProps {
    fill?: string;
    d?: string;
}

export const Svg = ({d, fill = '#8E8E8E'}: SvgProps) => (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
            fill={fill}
        />
    </svg>
);
