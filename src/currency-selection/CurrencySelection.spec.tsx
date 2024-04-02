import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CurrencySelection } from "./CurrencySelection";
import { useState } from "react";

function CurrencySelectionTestComponent({
  selectedItems = [],
}: {
  selectedItems?: string[];
}) {
  const [state, setState] = useState<string[]>(selectedItems);
  return (
    <CurrencySelection
      allItems={["USD", "EUR", "GBP"]}
      selectedItems={state}
      onChange={setState}
      allSelector={true}
    />
  );
}

describe("CurrencySelection", () => {
  it("should render CurrencySelection without preselected items", () => {
    const { container } = render(<CurrencySelectionTestComponent />);

    const selectedItemsContainer = container.querySelector(
      "[data-testid='CurrencySelection_selectedItemsContainer']"
    ) as HTMLDivElement;
    expect(
      selectedItemsContainer.querySelectorAll(".CurrencySelection_selectedItem")
    ).toHaveLength(0);

    expect(screen.getByText("USD")).toBeDefined();
    expect(screen.getByText("EUR")).toBeDefined();
    expect(screen.getByText("GBP")).toBeDefined();
  });

  it("should render CurrencySelection WITH preselected items", () => {
    const { container } = render(
      <CurrencySelectionTestComponent selectedItems={["USD", "EUR"]} />
    );

    const selectedItemsContainer = container.querySelector(
      "[data-testid='CurrencySelection_selectedItemsContainer']"
    ) as HTMLDivElement;
    expect(within(selectedItemsContainer).getByText("USD")).toBeDefined();
    expect(within(selectedItemsContainer).getByText("EUR")).toBeDefined();

    const allItemsContainer = container.querySelector(
      "[data-testid='CurrencySelection_allItemsContainer']"
    ) as HTMLDivElement;
    expect(within(allItemsContainer).getByText("USD")).toBeDefined();
    expect(within(allItemsContainer).getByText("EUR")).toBeDefined();
    expect(within(allItemsContainer).getByText("GBP")).toBeDefined();
  });

  it("should select item by click", () => {
    const { container } = render(<CurrencySelectionTestComponent />);

    let selectedItemsContainer = container.querySelector(
      "[data-testid='CurrencySelection_selectedItemsContainer']"
    ) as HTMLDivElement;
    expect(
      selectedItemsContainer.querySelectorAll(".CurrencySelection_selectedItem")
    ).toHaveLength(0);

    const allItemsContainer = container.querySelector(
      "[data-testid='CurrencySelection_allItemsContainer']"
    ) as HTMLDivElement;
    fireEvent.click(within(allItemsContainer).getByText("USD"));

    selectedItemsContainer = container.querySelector(
      "[data-testid='CurrencySelection_selectedItemsContainer']"
    ) as HTMLDivElement;
    expect(within(selectedItemsContainer).getByText("USD")).toBeDefined();
  });

  it("should unselect item by sequential click", () => {
    const { container } = render(
      <CurrencySelectionTestComponent selectedItems={["USD"]} />
    );

    let selectedItemsContainer = container.querySelector(
      "[data-testid='CurrencySelection_selectedItemsContainer']"
    ) as HTMLDivElement;
    expect(
      selectedItemsContainer.querySelectorAll(".CurrencySelection_selectedItem")
    ).toHaveLength(1);

    const allItemsContainer = container.querySelector(
      "[data-testid='CurrencySelection_allItemsContainer']"
    ) as HTMLDivElement;
    fireEvent.click(within(allItemsContainer).getByText("USD"));

    selectedItemsContainer = container.querySelector(
      "[data-testid='CurrencySelection_selectedItemsContainer']"
    ) as HTMLDivElement;
    expect(
      selectedItemsContainer.querySelectorAll(".CurrencySelection_selectedItem")
    ).toHaveLength(0);
  });

  it("should unselect item by clicking remove button", () => {
    const { container } = render(
      <CurrencySelectionTestComponent selectedItems={["USD"]} />
    );

    let selectedItemsContainer = container.querySelector(
      "[data-testid='CurrencySelection_selectedItemsContainer']"
    ) as HTMLDivElement;
    expect(
      selectedItemsContainer.querySelectorAll(".CurrencySelection_selectedItem")
    ).toHaveLength(1);

    fireEvent.click(
      selectedItemsContainer.querySelector(
        ".CurrencySelection_selectedItem__close"
      ) as Element
    );

    selectedItemsContainer = container.querySelector(
      "[data-testid='CurrencySelection_selectedItemsContainer']"
    ) as HTMLDivElement;
    expect(
      selectedItemsContainer.querySelectorAll(".CurrencySelection_selectedItem")
    ).toHaveLength(0);
  });

  it("should select all item by All click", () => {
    const { container } = render(<CurrencySelectionTestComponent />);

    let selectedItemsContainer = container.querySelector(
      "[data-testid='CurrencySelection_selectedItemsContainer']"
    ) as HTMLDivElement;
    expect(
      selectedItemsContainer.querySelectorAll(".CurrencySelection_selectedItem")
    ).toHaveLength(0);

    const allItemsContainer = container.querySelector(
      "[data-testid='CurrencySelection_allItemsContainer']"
    ) as HTMLDivElement;
    fireEvent.click(within(allItemsContainer).getByText("All"));

    selectedItemsContainer = container.querySelector(
      "[data-testid='CurrencySelection_selectedItemsContainer']"
    ) as HTMLDivElement;
    expect(
      selectedItemsContainer.querySelectorAll(".CurrencySelection_selectedItem")
    ).toHaveLength(3);
  });
});
