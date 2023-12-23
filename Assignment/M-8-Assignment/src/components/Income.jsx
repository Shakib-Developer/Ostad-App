// components/IncomeForm.js
import React, { useState } from "react";

const Income = () => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process income transaction here (e.g., save to database)
    console.log("Income amount:", amount);
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input type="number" value={amount} onChange={handleAmountChange} />
      </label>
      <h3>{amount}</h3>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Income;
