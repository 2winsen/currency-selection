import "./Item.module.scss";

interface ItemProps extends React.HTMLProps<HTMLDivElement> {
  label: string;
  onToggle: (item: string) => void;
}

export function Item({ label, onToggle, ...restProps }: ItemProps) {
  function handleClick() {
    onToggle(label);
  }

  return (
    <div onClick={handleClick} {...restProps}>
      {label}
    </div>
  );
}
