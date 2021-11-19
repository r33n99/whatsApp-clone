import React from "react";
import "./SidebarChat.scss";
import { Avatar } from "@material-ui/core";
import db from "../../firebase";
import { Link } from "react-router-dom";

function SidebarChat({ addNewChat, name, id }) {
  const [messages, setMessages] = React.useState("");
  React.useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/micah/${id}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p> Last message: {messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
