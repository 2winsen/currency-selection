import { Item } from "./Item";
import { SelectedItem } from "./SelectedItem";
import "./CurrencySelection.scss";
import { useUnblockAnimations } from "./hooks";

interface CurrencySelectionProps {
  selectedItems: string[];
  allItems: string[];
  allSelector: boolean;
  onChange: (selected: string[]) => void;
}

export function CurrencySelection({
  selectedItems = [],
  allItems = [],
  allSelector,
  onChange,
}: CurrencySelectionProps) {
  function handleChange(item: string) {
    let updatedSelectedItems: string[] = [];
    if (selectedItems.includes(item)) {
      updatedSelectedItems = remove(selectedItems, item);
    } else {
      updatedSelectedItems = add(selectedItems, item);
    }
    onChange(updatedSelectedItems);
  }

  function add(selectedItems: string[], item: string) {
    return [...selectedItems, item];
  }

  function remove(selectedItems: string[], item: string) {
    return selectedItems.filter((x) => x !== item);
  }

  function handleChangeAll() {
    if (selectedItems.length === allItems.length) {
      onChange([]);
    } else {
      onChange([...allItems]);
    }
  }

  const parentRef = useUnblockAnimations<HTMLDivElement>();

  return (
    <div className="CurrencySelection animationBlock" ref={parentRef}>
      <section
        className="CurrencySelection_itemsContainer"
        data-testid="CurrencySelection_selectedItemsContainer"
      >
        {selectedItems.map((item) => (
          <SelectedItem key={item} label={item} onRemove={handleChange} />
        ))}
      </section>
      <section
        className="CurrencySelection_itemsContainer"
        data-testid="CurrencySelection_allItemsContainer"
      >
        {allSelector ? (
          <Item
            label="All"
            onToggle={handleChangeAll}
            selected={allItems.length === selectedItems.length}
            className="CurrencySelection_item__all"
          />
        ) : null}
        {allItems.map((item) => {
          return (
            <Item
              key={item}
              label={item}
              onToggle={handleChange}
              selected={selectedItems.includes(item)}
            />
          );
        })}
      </section>
    </div>
  );
}
