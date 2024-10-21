import { useState } from "react";
import { Button } from "./Button";

export function FormAddFriend({ onAddFriends }) {
  const [name, SetName] = useState();
  const [image, Setimage] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriends(newFriend);
  }
  return (
    <form className="form-add-friend"
      onSubmit={handleSubmit}>
      <label>🤝Friend Name</label>
      <input type="text" value={name}
        onChange={e => SetName(e.target.value)} />
      <label>📸Image url</label>
      <input type="text" value={image}
        onChange={e => Setimage(e.target.value)} />
      <Button onClick={handleSubmit}>Select</Button>
    </form>
  );
}
