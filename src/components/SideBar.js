import React from "react";
import { LuLogOut } from "react-icons/lu";
import { TbHome } from "react-icons/tb";
import { BsChatDots } from "react-icons/bs";
import { FaUsersViewfinder } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import CustomHooks from "./hooks";


const SideBar = () => {
    const { SendRequest } = CustomHooks();
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await SendRequest({endpoint: '/logout', method: 'POST'});
            localStorage.removeItem('token');
            console.log('logout');
        } catch (err) {
            console.log('error logging out', err);
        }
    }
    return(
        <div>
            <div className="w-[95%] mx-auto bg-[#11468f] rounded-xl"
            >
                <span className="text-4xl text-white text-center flex justify-center py-8"><TbHome /></span>
                <span className="text-4xl text-white text-center flex justify-center py-8"><BsChatDots /></span>
                <span className="text-4xl text-white text-center flex justify-center py-8"><FaUsersViewfinder /></span>
                <span className="text-4xl text-white text-center flex justify-center py-8"><IoIosNotificationsOutline /></span>
                <span onClick={handleLogout} className="text-4xl text-white text-center flex justify-center py-8"><LuLogOut /></span>
            </div>
        </div>
    );
}
export default SideBar;