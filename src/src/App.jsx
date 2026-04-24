import { useState } from "react";

export default function App() {
  const [income, setIncome] = useState({ husband: 0, wife: 0, online: 0 });
  const [expenses, setExpenses] = useState(0);

  const totalIncome =
    Number(income.husband) + Number(income.wife) + Number(income.online);

  const savings = totalIncome - Number(expenses);

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>💎 Wealth V6 FIXED</h1>

      <h3>Доходы (₽)</h3>
      <input placeholder="муж"
        onChange={(e) => setIncome({ ...income, husband: e.target.value })} />
      <input placeholder="жена"
        onChange={(e) => setIncome({ ...income, wife: e.target.value })} />
      <input placeholder="USDT"
        onChange={(e) => setIncome({ ...income, online: e.target.value })} />

      <h3>Расходы</h3>
      <input onChange={(e) => setExpenses(e.target.value)} />

      <hr />

      <p>Доход: {totalIncome} ₽</p>
      <p>Сбережения: {savings} ₽</p>
    </div>
  );
}
