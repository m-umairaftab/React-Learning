import React, { useEffect } from "react";
import "./Chat.css";
import socketIO from "socket.io-client";
import { user } from "../join/Join";
const ENDPOINT = "http://localhost:4500/";

const Chat = () => {
  const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

  useEffect(() => {
    socket.on("connect", () => {
      // alert("connected");
    });
    return () => {};
  }, [socket]);

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header"></div>
        <div className="chatBox"></div>
        <div className="inputName">
          <input type="text" id="chatInput" />
          <button className="sendBtn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
