import { Canvas, type CanvasProps } from "@repo/ui";
import type { Meta } from "@storybook/react";

const meta: Meta<CanvasProps> = {
  component: Canvas
};

export default meta;

export const DefaultCanvas= (args: CanvasProps) => <Canvas {...args}><div>test</div></Canvas>;

DefaultCanvas.args = {
  className: "bg-black"
}


