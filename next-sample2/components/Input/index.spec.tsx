import { render, screen, RenderResult } from "@testing-library/react";
import { Input } from "./index";
import { fireEvent } from "@testing-library/react";

describe("Input", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Input id="username" label="Username" />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it("should empty in input on initial render", () => {
    const inputNode = screen.getByLabelText("Username") as HTMLInputElement;

    expect(inputNode).toHaveValue("");
  });

  it("should show input text", () => {
    const inputText = "Test Input Text";
    const inputNode = screen.getByLabelText("Username") as HTMLInputElement;
    fireEvent.change(inputNode, { target: { value: inputText } });

    const buttonNode = screen.getByRole("button", {
      name: "Reset",
    }) as HTMLButtonElement;

    fireEvent.click(buttonNode);

    expect(inputNode).toHaveValue("");
  });
});
