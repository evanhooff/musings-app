import type { Meta } from "@storybook/react";
import { Button } from "@repo/ui";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const DefaultButton = (args: typeof Button) => <Button {...args}>UI Button</Button>;

DefaultButton.args = {
  onClick: () => {
    console.log("Button clicked!");
  },
};


export const SecondaryButton = (args: typeof Button) => <Button {...args}>UI Button</Button>;

SecondaryButton.args = {
  color: "secondary",
  onClick: () => {
    console.log("Button clicked!");
  },
};
