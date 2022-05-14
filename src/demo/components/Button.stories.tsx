import * as React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
};
