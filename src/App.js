import React from "react";
import './App.css'
import Sidebar from "./Sidebar";
import Chat from "./Chat";
function App() {
  return (
    <div className="app">
      <div className="app__body">
        <div className="sidebar__header">
          <div className="sidebar__headerRight">
          
          </div>
        </div>
        <Sidebar />  
        <Chat />
      </div>
      {/* <h1>jaydeep singh , lets learn react</h1> */}
    </div>
  )
}

export default App;
