import React, {useState} from 'react';
import '../../styles/constants.css';
import './sliderTest.css';

interface SliderTestProps {
    type?: 'primary' | 'mark' | 'tooltip';
    single?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    minValue?: number;
    maxValue?: number;
    step?: number;
    tmpValue1?: number;
    tmpValue2?: number;
    marks?: number;
}

export const SliderTest = ({
                               type = 'primary',
                               single = true,
                               disabled = false,
                               minValue = 0,
                               maxValue = 100,
                               step = 1,
                               tmpValue1,
                               tmpValue2,
                               marks = 5,
                               ...props
                           }: SliderTestProps) => {

    const [min, setMin] = useState(minValue);
    const [max, setMax] = useState(maxValue);
    const onInputMinHandle = (e: any) => {
        if (parseInt(e.currentTarget.value) <= max) {
            setMin(parseInt(e.currentTarget.value));
        }
    }
    const onInputMaxHandle = (e: any) => {
        if (parseInt(e.currentTarget.value) >= min) {
            setMax(parseInt(e.currentTarget.value));
        }
    }
    const left = (min - minValue) * 100 / (maxValue - minValue);
    const right = (maxValue + minValue - max) * 100 / (maxValue - minValue);
    return (
        <div className="range-slider--container">
            {single ? null :
                <input value={min} min={minValue} max={maxValue} step="1" type="range" onChange={onInputMinHandle}
                       className="range-slider--input range-slider--input-l"/>}
            <input value={max} min={minValue} max={maxValue} step="1" type="range" onChange={onInputMaxHandle}
                   className="range-slider--input range-slider--input-r"/>
            {single ? null :
                <div className="range-slider--track-start"
                     style={{left: '6px', width: `calc(${left}% - ${12 * left / 100}px)`}}/>}
            <div className="range-slider--track-middle" style={{
                left: `calc(6px + ${left}% - ${12 * left / 100}px)`,
                right: `calc(6px + ${right}% - ${12 * right / 100}px)`
            }}/>
            <div className="range-slider--track-end"
                 style={{width: `calc(${right}% - ${12 * right / 100}px)`, right: '6px'}}/>
            {type === 'tooltip' ?
                <React.Fragment>
                    {single ? null : <div className="range-slider--tooltip" style={{
                        left: `calc(6px + ${left}% - ${12 * left / 100}px)`
                    }}>{min}</div>}
                    <div className="range-slider--tooltip" style={{
                        right: `calc(6px + ${right}% - ${12 * right / 100}px)`
                    }}>{max}</div>
                </React.Fragment> : null}
            {type === 'mark' ? Array(marks).map(() =>

                <div className="range-slider--mark" style={{left: 0}}/>
            ) : null}


        </div>
    );
};
