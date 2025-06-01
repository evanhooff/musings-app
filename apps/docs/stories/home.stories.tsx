import { Button, Header, HomeSkeleton, ContentSkeleton } from "@repo/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HomeSkeleton> = {
  component: HomeSkeleton,
  parameters: {
    layout: 'fullscreen',
  },
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
    <HomeSkeleton>
        <>
          <Header>
            Test
          </Header>
          <main>
            <ContentSkeleton {...props}>
                <div className="bg-black w-20 text-white">test</div>
                <div className="bg-white grow">test</div>
                <div className="bg-blue w-10 text-white">test</div>
            </ContentSkeleton>
          </main>
        </>
    </HomeSkeleton>
  ),
  name: "HomeSkeleton",
  args: {
    direction: "ltr",
  },
};
