import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="./photo.jpg"
            alt=""
          />
          <span>Naitik Jain</span>
          <p>hi how are you...</p>
        </div>
        <div className="message">
          <img
            src="./photo.jpg"
            alt=""
          />
          <span>Kanan</span>
          <p>hi how are you...</p>
        </div>
        <div className="message">
          <img
            src="./photo.jpg"
            alt=""
          />
          <span>Rushabh</span>
          <p>hi how are you...</p>
        </div>
        <div className="message">
          <img
            src="./photo.jpg"
            alt=""
          />
          <span>Ananya</span>
          <p>hi how are you...</p>
        </div>
        <div className="message">
          <img
            src="./photo.jpg"
            alt=""
          />
          <span>Naitik Jain</span>
          <p>hi how are you...</p>
        </div>
        <div className="message">
          <img
            src="./photo.jpg"
            alt=""
          />
          <span>Naitik Jain</span>
          <p>hi how are you...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="./photo.jpg"
                alt=""
              />
              Naitik Jain
            </div>
            <span className="close" onClick={() => setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>hi how are you</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>hi how are you</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>hi how are you</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>hi how are you</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>hi how are you</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>hi how are you</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>hi how are you</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>hi how are you</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>hi how are you</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>hi how are you</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea ></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
