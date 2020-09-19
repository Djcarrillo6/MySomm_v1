import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import '../../css/chat.css';

import InfoBar from '../../components/chat/InfoBar';
import Input from '../../components/chat/Input';
import Messages from '../../components/chat/Messages';
import TextContainer from '../../components/chat/TextContainer';
let socket;


const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:8081';

    // destrcutured 'name' & 'room' from the queryString.parse() object. 
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {

        });


        return () => {
            socket.emit('disconnect');

            socket.off();
        }

    }, [ENDPOINT, location.search]);


    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    // function for sending messages
    const sendMessage = (event) => {

        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        };
    };


    console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="container1">
                <InfoBar room={room} />
                <Messages
                    messages={messages}
                    name={name}
                />
                <Input
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                />
                <TextContainer users={users} />
            </div>
        </div>
    )
};

export default Chat;