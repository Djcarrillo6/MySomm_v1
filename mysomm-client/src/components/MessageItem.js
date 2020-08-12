import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImage from "../images/default-profile-image.jpeg";
import { removeMessage } from "../store/actions/messages";

const MessageItem = ({ date, time, profileImageUrl, text, username, removeMessage, isCorrectUser }) => (
    <div>
        <li className="list-group-item">
            <img src={profileImageUrl || DefaultProfileImage} alt={username} height="100" width="100" className="timeline-image" />
            <div className="message-area">
                <Link to="/">@{username} &nbsp;</Link>
                <span className="text-muted">
                    <Moment className="text-muted" format="Do YYYY-MM-DD HH:mm a">
                        {date}
                    </Moment >
                </span>
                <p className="msg-txt" >{text}</p>
                {isCorrectUser && (
                    <a id="trashcan" onClick={removeMessage}>
                        Delete
                    </a>
                )}
            </div>
        </li>
    </div>
);

export default MessageItem;