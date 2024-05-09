import React from "react";

const Conversation = ({conversation, emoji, selectedId, setSelectedId}) => {

    const isSelected = selectedId === conversation?._id
    
    return (
        <>
            <div onClick={() => setSelectedId(conversation?._id)} className={`flex items-center hover:bg-[#66829b] rounded-md p-2 py-1 cursor-pointer ${isSelected ? "bg-[#66829b]" : ""}`}>
               <div className="flex items-center justify-center p-2 gap-3">
               <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200">{conversation?.username}</p>
                        <span className="text-xl">{emoji}</span>
                    </div> 
                </div>
               </div>
            </div>
            <div className="divider my-0 py-0 h-1" />
        </>
    );
};

export default Conversation;
