import React from "react";
import { LuLogOut } from "react-icons/lu";
import { TbHome } from "react-icons/tb";
import { BsChatDots } from "react-icons/bs";
import { FaUsersViewfinder } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";



const SideBar = () => {
    return(
        <div>
            <div className="w-[95%] mx-auto bg-[#11468f] rounded-xl"
            >
                <span className="text-4xl text-white text-center flex justify-center py-8"><TbHome /></span>
                <span className="text-4xl text-white text-center flex justify-center py-8"><BsChatDots /></span>
                <span className="text-4xl text-white text-center flex justify-center py-8"><FaUsersViewfinder /></span>
                <span className="text-4xl text-white text-center flex justify-center py-8"><IoIosNotificationsOutline /></span>
                <span className="text-4xl text-white text-center flex justify-center py-8"><LuLogOut /></span>
            </div>
        </div>
    );
}
export default SideBar;