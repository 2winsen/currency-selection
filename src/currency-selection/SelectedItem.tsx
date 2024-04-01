import "./SelectedItem.scss";

interface SelectedItemProps {
  label: string;
  onRemove: (item: string) => void;
}

export function SelectedItem({ label, onRemove }: SelectedItemProps) {
  function handleClick() {
    onRemove(label);
  }

  return (
    <div className="CurrencySelection_item CurrencySelection_selectedItem">
      {label}
      <span
        onClick={handleClick}
        className="CurrencySelection_selectedItem__close"
      >
        &times;
      </span>
    </div>
  );
}
