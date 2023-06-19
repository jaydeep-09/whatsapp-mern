import React from "react";
import "./Chat.css";
import { Avatar } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function chat() {
  return (
    <div className="Chat">
      <div className="chat_header">
        <Avatar/>

        <div className="chat_headerInfo">
          <h3>Room name asdfasdfashvbjnbdfasdfasdfasdfasdfsdt</h3>
          <p> last seen at .....</p>
        </div>
        
        <div className="chat_headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        
      </div>

      <div className="chat_body">
        <p>this is a message</p>
      </div>
    </div>
  );
}

export default chat;
