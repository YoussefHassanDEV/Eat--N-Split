import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState(0);
  const [paidByUser, setpaidByUser] = useState(0);
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setwhoIsPaying] = useState("user");
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByFriend) return;
    onSplitBill(whoIsPaying === 'user' ?
      paidByFriend : -paidByUser);
  }
  return (
    <form className="form-split-bill"
      onSubmit={handleSubmit}>

      <h2>Split a bill with {selectedFriend.name} </h2>

      <label>💸 Bill Value 💸</label>

      <input
        type="number"
        value={bill}
        onChange={e => setBill(Number(e.target.value))} />

      <label>💰Your expense💰</label>

      <input
        type="number"
        value={paidByUser}
        onChange={e => setpaidByUser(
          Number(e.target.value) > bill ? paidByUser :
            Number(e.target.value)
        )} />

      <label>🤑
        {selectedFriend.name}'s expense 🤑
      </label>

      <input
        type="text"
        disabled
        value={paidByFriend} />
      <label>Who is paying the bill</label>

      <select
        value={whoIsPaying}
        onChange={e => setwhoIsPaying(e.target.value)}>
        <option
          value="User">
          You
        </option>
        <option
          value="Friend">
          {selectedFriend.name}
        </option>
      </select>

      <Button>Split bill</Button>

    </form>
  );
}
