import { useState } from "react";
import "./index.css";
import { FriendList } from "./FriendList";
import { Button } from "./Button";
import { FormAddFriend } from "./FormAddFriend";
import { FormSplitBill } from "./FormSplitBill";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [showAddFriend, SetshowAddFriend] = useState(0)
  const [selectedFriend, setSelectedFriend] = useState(null)
  function handleShowAddFriend() {
    SetshowAddFriend(!showAddFriend);
    setSelectedFriend(null)
  }
  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend]);
    SetshowAddFriend(0)
  }
  function handleSelection(friend) {
    setSelectedFriend((cur) =>
      cur?.id === friend.id ? null : friend
    )
    SetshowAddFriend(false)
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend
          onAddFriends={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      {selectedFriend && 
      <FormSplitBill
        onSplitBill={handleSplitBill}
        selectedFriend={selectedFriend}
        key={selectedFriend.id}
      />}
    </div>
  )
}
