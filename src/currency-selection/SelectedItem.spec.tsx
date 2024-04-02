import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SelectedItem } from "./SelectedItem";

describe("SelectedItem", () => {
  it("should render SelectedItem with label", () => {
    const onRemove = jest.fn();
    render(<SelectedItem label="USD" onRemove={onRemove} />);
    expect(screen.getByText("USD")).toBeDefined();
  });

  it("should handle close click", () => {
    const onRemove = jest.fn();
    const { container } = render(
      <SelectedItem label="USD" onRemove={onRemove} />
    );
    const closeButton = container.querySelector(
      ".CurrencySelection_selectedItem__close"
    );
    fireEvent.click(closeButton as Element);
    expect(onRemove).toHaveBeenCalled();
  });
});
