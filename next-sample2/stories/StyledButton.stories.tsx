import type { Meta, StoryObj } from "@storybook/react";
import { StyledButton, StyledButtonProps } from "../components/StyledButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof StyledButton> = {
  title: "Example/StyledButton",
  component: StyledButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "success", "transparent"],
    },

    children: {
      control: { type: "text" },
    },

    onClick: {
      action: "clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof StyledButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "success",
  },
};

export const Transparent: Story = {
  args: {
    variant: "transparent",
    children: "transparent",
  },
};
