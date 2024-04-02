import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Item } from "./Item";

describe("Item", () => {
  it("should render Item with label and checkbox", () => {
    const onToggle = jest.fn();
    render(<Item label="USD" onToggle={onToggle} selected={false} />);

    const item = screen.getByText("USD");
    expect(item.classList.contains("CurrencySelection_item__selected")).toBe(
      false
    );

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it("should render SELECTED Item with label and checkbox", () => {
    const onToggle = jest.fn();
    render(<Item label="USD" onToggle={onToggle} selected={true} />);

    const item = screen.getByText("USD");
    expect(item.classList.contains("CurrencySelection_item__selected")).toBe(
      true
    );

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });
});
