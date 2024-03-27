interface SelectedItemProps {
  label: string;
  onRemove: (item: string) => void;
}

export function SelectedItem({ label, onRemove }: SelectedItemProps) {
  function handleClick() {
    onRemove(label);
  }

  return (
    <div>
      {label}
      <span onClick={handleClick}>X</span>
    </div>
  );
}
