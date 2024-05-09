import React from "react";
import { formatCreatedAtDate } from "../../utils/generalFunction";
import { useUser } from "../../store/user/hooks";

const Message = ({ message }) => {
    const fromMe = message?.senderId === useUser()?._id;
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const bubbleBgColor = fromMe ? "bg-blue-500" : ""
    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message?.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                {formatCreatedAtDate(message?.createdAt)}
            </div>
        </div>
    );
};

export default Message;
