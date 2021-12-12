import React from 'react';
// @ts-ignore
import {ReactComponent as StockSVG} from '../../assetsSVG/ArrowDownFill.svg';

interface SvgProps extends React.HTMLAttributes<HTMLDivElement> {
    fill?: string;
    SvgComponent?: any;
    size?: 'medium' | 'large' | 'small';
}

export const Svg = ({
                        fill = '#aaaaaa',
                        SvgComponent = StockSVG,
                        size = 'medium',
                        ...other
                    }: SvgProps) => {
    return (
        <SvgComponent {...other} fill={fill}/>
    );
};
