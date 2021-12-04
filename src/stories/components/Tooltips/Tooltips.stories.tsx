import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Tooltips} from "./Tooltips";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Data Display/Tooltips',
    component: Tooltips,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Tooltips>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltips> = (args) => <Tooltips {...args} >
    <div style={{margin: '0 auto'}}>4444</div>
</Tooltips>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    text: 'help info',
    placement: 'bottom-left'
};

export const Secondary = Template.bind({});
Secondary.args = {

};

