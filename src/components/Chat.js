import React, { useState, useEffect } from "react";
import SideBar from './SideBar';
import Cards from './Cards';
import MessageBody from './MessageBody';
import CustomHooks from "./hooks";

const Chat = () => {
  const { data, error, loading, SendRequest } = CustomHooks();
  const [allUsers, setAllUsers] = useState([]);
  const [receiver, setReceiver] = useState();
  const [receiverId, setReceiverId] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      await SendRequest({endpoint:'/users', method: 'GET'});
    };
    fetchUsers();
  }, [SendRequest]);

  useEffect(() => {
    if (data) {
      // console.log(data.allUsers);
      setAllUsers(data.allUsers);
    }
  }, [data]);

  const handleChatUser = (username, id) => {
    console.log('Selected user receiver:', username); // receiver
    console.log('Selected user receiverId:', id); //receiverId
    setReceiver(username);
    setReceiverId(id);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white w-[88%] h-[90vh] mx-auto my-8 border rounded-xl flex flex-row justify-around items-center">
        <div>{loading && <p>loading please wait</p>}</div>
        <div>{error && <p>{error}</p>}</div>
        <div className="w-[8%] h-[90%]">
          <SideBar className="" />
        </div>
        <div className='w-[30%] h-[90%] flex flex-col gap-9'>
          <div className='h-[45%] overflow-y-auto bg-[#11468f] p-4 rounded-xl'>
            <h4 className='text-left text-white text-[20px] font-semibold mx-4'>JayChat Users</h4>
            <div>
              {
                allUsers.length > 0 ? (
                  allUsers.map((user) => (
                      <Cards key={user._id} onClick={handleChatUser} id={user._id} name={user.username} message={user.email} number={user.firstname} />
                  ))
                ) : (
                  <p>No User Found</p>
                )
              }
            </div>
          </div>
          <div className='h-[45%] overflow-y-auto bg-[#11468f] p-4 rounded-xl'>
            <h4 className='text-left text-white text-[20px] font-semibold mx-4'>Friends</h4>
            <div>
              {
                users.map((item, index) => (
                  <Cards key={index} name={item.name} message={item.message} number={item.number} />
                ))
              }
            </div>
          </div>
        </div>
        <div className='w-[45%]'>
          <MessageBody receiver={receiver} receiverId={receiverId}/>
        </div>
      </div>
    </div>
  );
}

export default Chat;

const users = [
  {
    name: "Jay Jay",
    message: "This is Jay's message",
    number: "5",
  },
  {
    name: "Jay Jay",
    message: "This is Jay's message",
    number: "5",
  },
  {
    name: "Jay Jay",
    message: "This is Jay's message",
    number: "5",
  },
  {
    name: "Jay Jay",
    message: "This is Jay's message",
    number: "5",
  },
];
