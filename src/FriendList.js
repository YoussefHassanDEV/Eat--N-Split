import { Friend } from "./Friend";

export function FriendList({ friends, onSelection, selectedFriend }) {

  return (
    <ul>
      {friends.map(friend => (<Friend
        selectedFriend={selectedFriend}
        friend={friend}
        key={friend.id}
        onSelection={onSelection} />)
      )}
    </ul>
  );
}
