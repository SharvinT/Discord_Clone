import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@material-ui/icons";
import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import Message from "./Message";
function Chat() {
  return (
    <div className="chat">
      {/* herder */}
      <ChatHeader />
      {/* Messages */}
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
      </div>
      {/* textbox */}
      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form>
          <input type="text" placeholder={`Message #TESTCHANNEL`} />
          <button className="chat__inputButton" type="submit">
            Submit
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
