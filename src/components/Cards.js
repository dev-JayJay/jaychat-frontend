import React from "react";;


const Cards = ({ onClick, name, message, number, id }) => {
    return(
        <div onClick={() => onClick(name,id)}>
            <div className="w-full flex flex-row border gap-4 px-3 py-3 my-2 rounded-xl">
                {/* image */}
                <div className="w-[50px] h-[50px] rounded-full border border-white"></div>
                <div className="w-[90%] flex flex-row justify-between items-center">
                    <div className="text-left text-white">
                        <span className="text-left font-semibold">{name}</span>
                        <p>{message}</p>
                    </div>
                    <div>
                        <span className="text-blue-500 bg-white px-1 rounded-full">{number}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cards;