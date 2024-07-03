import React, { useState, useEffect } from "react";
import CustomHooks from "./hooks"


const MessageBody = ({receiver, receiverId}) => {
    const { data, error, loading, SendRequest } = CustomHooks();
    const  [chat, setChat] = useState([]);
    const  [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const userId = localStorage.getItem('userId');
            const query = `?senderId=${userId}&receiverId=${receiverId}`;
            await SendRequest({endpoint:`/send${query}`, method: 'GET'});
        };
        fetchUsers();
      }, [receiverId]);

    // getting all messages
    useEffect(() => {
        if (data) {
            setChat(data.messages);
            console.log('these is the message data',data.messages);
        }
    },[data]);

    const handleChange = (e) => {
        setMessage(e.target.value);
    }
    const handleSendMessage = async (e) => {
        e.preventDefault();

        // Get the userId from localStorage
        const userId = localStorage.getItem('userId');
        const chatData = {
            message,
            senderId : userId,
            receiverId,
        }
        try {
            await SendRequest({endpoint: '/send', method: 'POST', body: chatData});
            console.log('message sent successfully',message);
        } catch (error) {
            console.log('error sending message', error);
        }
    }
    return(
        <div>
            <div className="relative w-full h-[78vh] flex flex-col border gap-4 px-3 py-3 my-2 rounded-xl">
                <p className="text-center bg-blue-400 mx-auto w-[98%] py-4 rounded-lg">{receiver ? <span>{receiver}</span> : 'Welcome to Jay chat'}</p>
                <div className="w-[98%] mx-auto mb-0 text-left">
                    <p>{error && <p>{error}</p>}</p>
                    <p>{loading && <p>please wait while message is loading</p>}</p>
                    <p>
                        {receiverId && chat.length > 0 ? (
                            chat.map((msg, index) => (
                            <p key={index} className="message">{msg.message}</p>
                            ))
                        ) : (
                            <p>No messages to display</p>
                        )}
                    </p>
                </div>
                <div className="w-[98%] mx-auto flex gap-3 absolute bottom-0 mb-4">
                    <div className="w-[80%] border border-black rounded-lg">
                        <input type='text' placeholder="Type Message..." onChange={handleChange} className="w-full h-full border border-black rounded-lg px-5" />
                    </div>
                    <button onClick={handleSendMessage} className="px-3 py-3 text-white font-semibold rounded-xl bg-[#11468f]">Send</button>
                </div>
            </div>
        </div>
    );
}
export default MessageBody;