import type { Meta, StoryObj } from "@storybook/react";
import { StyledButton, StyledButtonProps } from "../components/StyledButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof StyledButton> = {
  title: "Example/StyledButton",
  component: StyledButton,
};

export default meta;
// type Story = StoryObj<StyledButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = () => {
  return <StyledButton variant="primary">Primary</StyledButton>;
};

export const Success = () => {
  return <StyledButton variant="success">Success</StyledButton>;
};

export const Transparent = () => {
  return <StyledButton variant="transparent">Transparent</StyledButton>;
};