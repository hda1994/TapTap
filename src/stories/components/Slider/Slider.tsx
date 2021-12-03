import React, {useState} from 'react';
import '../../styles/constants.css';
import './slider.css';

// import styles from './Button.module.css';

interface SliderProps {
    type?: 'primary' | 'mark' | 'tooltip';
    single?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    minValue?: number;
    maxValue?: number;
    step?: number;
}

export const Slider = ({
                           type = 'primary',
                           single = true,
                           disabled = false,
                           minValue = 0,
                           maxValue = 50,
                           step = 1,
                           ...props
                       }: SliderProps) => {
    const [min, setMin] = useState(minValue);
    const [max, setMax] = useState(maxValue);
    const left = (min - minValue) * 100 / (maxValue - minValue);
    const right = (maxValue + minValue - max) * 100 / (maxValue - minValue);
    return (
        <div>
            <div className={`slider--container`}>
                {single ? null :
                    <div className={`slider--left-range slider--range`}
                         style={{width: `${left}%`}}
                    />}
                {single ? null :
                    <div className={`slider--left-flag slider--flag`}
                         style={{left: `calc(${left}% - 6px)`}}
                    />}
                <div className={`slider--middle-range slider--range`}
                     style={{left: `${left}%`}}
                />
                <div className={`slider--right-flag slider--flag`}
                     style={{right: `calc(${right}% - 6px)`}}
                />
                <div className={`slider--right-range slider--range`}
                     style={{width: `${right}%`}}
                />
            </div>
            {single ? null :<input type="range" name="min" value={min} onChange={(e) => {
                setMin(parseInt(e.currentTarget.value));
            }}
                   min="0" max="20" step="1"/>}
            <input type="range" name="max" value={max} onChange={(e) => {
                setMax(parseInt(e.currentTarget.value));
            }}
                   min="0" max="20" step="1"/>
        </div>
    );
};
