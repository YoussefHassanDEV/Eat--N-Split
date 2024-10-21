import { Button } from "./Button";

export function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.name}
      {friend.balance < 0 &&
        <p className="red">You Owe {friend.name} {Math.abs(friend.balance)}</p>}
      {friend.balance > 0 &&
        <p className="green">{friend.name} Owe You {friend.balance}</p>}
      {friend.balance === 0 &&
        <p>You and {friend.name} are even</p>}
      <Button onClick={() => onSelection(friend)}>{isSelected ? "close" : "Select"}</Button>
    </li>
  );
}
