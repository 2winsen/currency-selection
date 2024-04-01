import { useState } from "react";
import { CurrencySelection } from "./currency-selection/CurrencySelection";

function App() {
  const top20Currencies = [
    "USD", // US Dollar
    "EUR", // Euro
    "JPY", // Japanese Yen
    "GBP", // British Pound
    "CNY", // Chinese Yuan Renminbi
    "AUD", // Australian Dollar
    "CHF", // Swiss Franc
    "CAD", // Canadian Dollar
    "SGD", // Singapore Dollar
    "HKD", // Hong Kong Dollar
    "INR", // Indian Rupee
    "BRL", // Brazilian Real
    "MXN", // Mexican Peso
    "RUB", // Russian Ruble
    "IDR", // Indonesian Rupiah
    "KRW", // South Korean Won
    "THB", // Thai Baht
    "TRY", // Turkish Lira
    "ZAR", // South African Rand
  ];

  const [selected, setSelected] = useState<string[]>([]);

  function handleChange(selectedItems: string[]) {
    setSelected(selectedItems);
    console.log(selectedItems);
  }

  return (
    <div>
      <CurrencySelection
        allItems={top20Currencies}
        selectedItems={selected}
        onChange={handleChange}
        allSelector={true}
      />
    </div>
  );
}

export default App;
