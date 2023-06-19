import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SidebarChat from "./SidebarChat";
function sidebar() {
  return (
    
    <div className="sidebar">
      {/* <h1> i am sidebar </h1> */}
      <div className="sidebar_header">
        <Avatar src="/" />
        <div className="sidebar_header_right">
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

      <div className="sidebar_search">
        <div className="sidebar_searchcontainer">
          <SearchIcon />
          <input placeholder="search or start a new chat" type="text" />
        </div>
      </div>

    <div className="sidebar_chats">
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>
    </div>
    </div>
  );
}
export default sidebar;
