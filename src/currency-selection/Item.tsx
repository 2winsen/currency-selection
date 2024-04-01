import cn from "classnames";
import "./Item.scss";

interface ItemProps extends React.HTMLProps<HTMLDivElement> {
  label: string;
  selected: boolean;
  className?: string;
  onToggle: (item: string) => void;
}

export function Item({
  label,
  onToggle,
  selected,
  className,
  ...restProps
}: ItemProps) {
  function handleClick() {
    onToggle(label);
  }

  return (
    <div
      onClick={handleClick}
      className={cn("CurrencySelection_item", className, {
        CurrencySelection_item__selected: selected,
      })}
      {...restProps}
    >
      <input type="checkbox" checked={selected} readOnly />
      {label}
    </div>
  );
}
