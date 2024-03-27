import { Item } from "./Item";
import { SelectedItem } from "./SelectedItem";
import style from "./CurrencySelection.module.scss";
import cn from "classnames";

interface CurrencySelectionProps {
  selectedItems: string[];
  allItems: string[];
  onAdd: (item: string) => void;
  onRemove: (item: string) => void;
}

export function CurrencySelection({
  selectedItems = [],
  allItems = [],
  onRemove,
  onAdd,
}: CurrencySelectionProps) {
  function handleToggle(item: string) {
    if (selectedItems.includes(item)) {
      onRemove(item);
    } else {
      onAdd(item);
    }
  }

  return (
    <div className={style.container}>
      <section className={style.itemsContainer}>
        {selectedItems.map((item) => (
          <SelectedItem key={item} label={item} onRemove={onRemove} />
        ))}
      </section>
      <section className={style.itemsContainer}>
        {allItems.map((item) => {
          const selected = selectedItems.includes(item);
          return (
            <Item
              key={item}
              label={item}
              onToggle={handleToggle}
              className={cn({ [style.selected]: selected })}
            />
          );
        })}
      </section>
    </div>
  );
}
