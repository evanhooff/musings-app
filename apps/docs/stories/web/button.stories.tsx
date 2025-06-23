import type { Meta } from "@storybook/react";
import { Button } from "@repo/ui";
import '../../web.css';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const WebButton = (args: typeof Button) => <Button {...args}  className="bg-green-500">Web Button</Button>;

WebButton.args = {
  onClick: () => {
    console.log("Button clicked!");
  },
};
