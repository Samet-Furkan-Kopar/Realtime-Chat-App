import { useEffect, useRef } from "react";
import Message from "./Message";

const Messages = ({ messages }) => {
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  },[messages]);
  
    return (
        <div className="px-4 flex-1 overflow-auto">
            {messages.map((msg) => (
              <div key={msg?._id} ref={lastMessageRef}>
                <Message  message={msg} />
              </div>
            ))}
        </div>
    );
};

export default Messages;
