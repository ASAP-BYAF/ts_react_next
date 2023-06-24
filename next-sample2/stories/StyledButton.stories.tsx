import type { Meta, StoryObj } from "@storybook/react";
import { StyledButton, StyledButtonProps } from "../components/StyledButton";
import { useState } from "react";
import { action } from "@storybook/addon-actions";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof StyledButton> = {
  title: "Example/StyledButton",
  component: StyledButton,
};

export default meta;
// type Story = StoryObj<StyledButtonProps>;

const incrementAction = action("increment");

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = () => {
  const [count, setCount] = useState(0);
  const onClick = (e: React.MouseEvent) => {
    incrementAction(e, count);
    setCount((c) => c + 1);
  };

  return (
    <StyledButton variant="primary" onClick={onClick}>
      Count: {count}
    </StyledButton>
  );
};

export const Success = () => {
  return <StyledButton variant="success">Success</StyledButton>;
};

export const Transparent = () => {
  return <StyledButton variant="transparent">Transparent</StyledButton>;
};
