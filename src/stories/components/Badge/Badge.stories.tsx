import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
// @ts-ignore
import {ReactComponent as ButtonSvg} from '../../assetsSVG/ExportLine.svg';

import {Badge} from "./Badge";
import {Button} from "../Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Data Display/Badge',
    component: Badge,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) =>
    <Badge {...args}>
        <Button label={'Button'}/>
    </Badge>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {

};
export const Count = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Count.args = {
    dot: false,
    count: 5
};