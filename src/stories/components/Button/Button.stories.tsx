import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
// @ts-ignore
import {ReactComponent as ButtonSvg} from '../../assetsSVG/ExportLine.svg';

// import { Button } from './Button';
import {Button} from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'General/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    label: 'Button',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
    label: 'Button',
    svg: ButtonSvg,
    variants: 'leftIcon'
};

export const Icon = Template.bind({});
Icon.args = {
    svg: ButtonSvg,
    variants: 'iconOnly'
};

export const Danger = Template.bind({});
Danger.args = {
    danger: true,
    label: 'Button',
};
