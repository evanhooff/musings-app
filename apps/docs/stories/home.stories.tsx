import { Button, Header, HomeSkeleton } from "@repo/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HomeSkeleton> = {
  component: HomeSkeleton,
  argTypes: {
    direction: {
      control: { type: "radio" },
      options: ["ltr", "rtl"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof HomeSkeleton>;
export const Primary: Story = {
  render: (props) => (
    <HomeSkeleton {...props}>
        <>
          <Header>
            Test
          </Header>
          <main>
            <div>
              <Button
              className="m-4 bg-green-500"
                onClick={() => console.log("Pressed!")}>Text</Button>
            </div>
          </main>
        </>
    </HomeSkeleton>
  ),
  name: "HomeSkeleton",
  args: {
    direction: "ltr",
  },
};
