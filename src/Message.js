import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";
function Message() {
  return (
    <div className="message">
      <Avatar src="https://avatars1.githubusercontent.com/u/35537459?s=400&u=aac6881da9fd93661b93e2f4d2344cf2f4c5dc28&v=4" />
      <div className="message__info">
        <h4>
          Sharu
          <span className="message__timestamp">09:20:30 22-Oct</span>
        </h4>
        <p>This is a message</p>
      </div>
    </div>
  );
}

export default Message;
