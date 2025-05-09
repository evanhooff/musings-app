import { Button, HeaderSkeleton, HomeSkeleton } from "@repo/ui";
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
          <HeaderSkeleton>
            Test
          </HeaderSkeleton>
          <main>
            <div>
              <Button
                onClick={() => console.log("Pressed!")}>Text</Button>
            </div>
          </main>
        </>
    </HomeSkeleton>
  ),
  name: "HomeSkeleton",
  args: {
    children: (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="w-1/2 h-1/2 bg-gray-200 animate-pulse" />
      </div>
    ),
    direction: "ltr",
  },
};
