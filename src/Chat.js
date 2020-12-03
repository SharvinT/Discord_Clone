import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import Message from "./Message";
import firebase from "firebase";
import axios from "./axios";
import Pusher from "pusher-js";

const pusher = new Pusher("c8712fa6f2e7ca43a458", {
  cluster: "ap2",
});

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const getConversation = (channelId) => {
    if (channelId) {
      axios.get(`/get/conversation?id=${channelId}`).then((res) => {
        setMessages(res.data[0].conversation);
      });
    }
  };

  useEffect(() => {
    // if (channelId) {
    //   db.collection("channels")
    //     .doc(channelId)
    //     .collection("messages")
    //     .orderBy("timestamp", "asc")
    //     .onSnapshot((snapshot) =>
    //       setMessages(snapshot.docs.map((doc) => doc.data()))
    //     );
    // }
    if (channelId) {
      getConversation(channelId);
    }
    const channel = pusher.subscribe("conversation");
    channel.bind("newMessage", function (data) {
      getConversation(channelId);
    });
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();
    // db.collection("channels").doc(channelId).collection("messages").add({
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   message: input,
    //   user: user,
    // });
    axios.post(`/new/message?id=${channelId}`, {
      message: input,
      timestamp: Date.now(),
      user: user,
    });
    setInput("");
  };

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="chat">
      {/* herder */}
      <ChatHeader channelName={channelName} />
      {/* Messages */}
      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* textbox */}
      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            disabled={!channelId}
            placeholder={`Message #${channelName}`}
          />
          <button
            disabled={!channelId}
            className="chat__inputButton"
            type="submit"
            onClick={sendMessage}
          >
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
