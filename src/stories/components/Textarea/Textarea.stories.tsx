import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from "./Textarea";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Data Entry/Textarea',
  component: Textarea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Textarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'label',
};

