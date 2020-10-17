import React from "react";
import Moment from "react-moment";
import "./messages.css";

const Messages = ({ messages }) => {
  if (messages && messages.length === 0)
    return (
      <div>
        <p> No messages yet. </p>
      </div>
    );

  return (
    <div>
      {messages.map((message, id) => (
        <div className="card" key={id}>
          <div className="card-id">
            {"#"}
            {message.id}
          </div>
          <div className="card-body">{message.body}</div>
          <div className="card-time">
            {" "}
            {<Moment format="h:mm a">{message.postTime}</Moment>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
