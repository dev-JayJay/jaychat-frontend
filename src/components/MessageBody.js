import React from "react";;


const MessageBody = () => {
    return(
        <div>
            <div className="relative w-full h-[78vh] flex flex-col border gap-4 px-3 py-3 my-2 rounded-xl">
                <div className="w-[98%] mx-auto mb-0 text-left">
                    MessageBody
                </div>
                <div className="w-[98%] mx-auto flex gap-3 absolute bottom-0 mb-4">
                    <div className="w-[80%] border border-black rounded-lg">
                        <input type='text' placeholder="Type Message..." className="w-full h-full border border-black rounded-lg px-5" />
                    </div>
                    <button className="px-3 py-3 text-white font-semibold rounded-xl bg-[#11468f]">Send</button>
                </div>
            </div>
        </div>
    );
}
export default MessageBody;