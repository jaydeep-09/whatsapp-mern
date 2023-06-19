import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarChat.css";
// it is important to import the css in it
function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat_info">
        <h2>name is hear</h2>
        <p>this is description </p>
      </div>
    </div>
  );
}

export default SidebarChat;
