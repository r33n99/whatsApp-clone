import React from "react";
import "./sidebar.scss";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined } from "@material-ui/icons";
import SidebarChat from "../SidebarChat/index";
import db from "../../firebase"
import { useStateValue } from "../../StateProvider";
function Sidebar() {

  const [{user}, dispatch] = useStateValue();
  const [rooms,setRooms] = React.useState([]);

  React.useEffect(()=> {
  const unsubscribe = db.collection("rooms").onSnapshot(snapshot => 
    
  (
    setRooms(snapshot.docs.map(doc =>
      ({
        id: doc.id,
        data: doc.data(),
      })
      ))
  ))
  return () => {
    unsubscribe();
  }
  },[])

  return (
    <div className="sidebar">
      <div className="sidebar__header">
      <IconButton>
        <Avatar src={user?.photoURL} />
        </IconButton>
        <div className="sidebar__headerRight">
            <IconButton>
            <DonutLargeIcon />
            </IconButton>
            <IconButton>
            <ChatIcon />
            </IconButton>
            <IconButton>
            <MoreVertIcon />
            </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
      </div>

      <div className="sidebar__chats">
      < SidebarChat addNewChat />
        {rooms.map(room => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
