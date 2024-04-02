import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useUnblockAnimations } from "./hooks";

function TestComponent() {
  const ref = useUnblockAnimations<HTMLDivElement>();
  return (
    <div ref={ref} className="animationBlock">
      TestContainer
    </div>
  );
}

describe("useUnblockAnimations", () => {
  jest.useFakeTimers();
  it("should remove animationBlock", () => {
    render(<TestComponent />);
    let container = screen.getByText("TestContainer");
    expect(container.classList.contains("animationBlock")).toBe(true);

    jest.advanceTimersByTime(200);
    container = screen.getByText("TestContainer");
    expect(container.classList.contains("animationBlock")).toBe(false);
  });
});
