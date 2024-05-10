import Messages from "./Messages";
import MessageInput from "./MessageInput";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useSelectedUser } from "../../store/user/hooks";
import { getMessage, sendMessage } from "../../services/messageFetch";
import { useEffect, useState } from "react";
import { io } from 'socket.io-client';


const MessageContainer = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [socket, setSocket] = useState(null);
    const [loading, setLoading] = useState(false);
    const user = useSelectedUser();

    const sendMsg = async () => {
        try {
          setLoading(true);
            const data = {
                message: message,
            };
            const res = await sendMessage(user?._id, data);
            if (res.succeded === true) {
                setMessages([...messages, res.data]);
                setMessage("");
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    };

    const getMessages = async () => {
        try {
            const res = await getMessage(user?._id);
            if (res.succeded === true) {
                setMessages(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        setSocket(io("http://localhost:8800"))
      }, [])

      
  useEffect(() => {
    socket?.on('connect', () => {
        console.log("Connected to server");
    });

    socket?.on("chat", (data) => {
      if (data && data?.message) {
        setMessages((prev) => [...prev, data?.message?.message]);
      }
    })
  }, [socket])

    useEffect(() => {
        if (user?._id) getMessages();
    }, [user?._id]);

    return (
        <div className="flex flex-col md:min-w-[450px]">
            {!user?._id ? (
                <NoChatSelected />
            ) : (
                <>
                    <div className="bg-slate-500 px-4 py-2 mb-2">
                        <span className="label-text">To:</span>{" "}
                        <span className="text-gray-900 font-bold">{user?.username}</span>
                    </div>
                    <Messages messages={messages} />
                    <MessageInput sendMessage={sendMsg} setMessage={setMessage} message={message} loading={loading} />
                </>
            )}
        </div>
    );
};

export default MessageContainer;


const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 samet ❄</p>
                <p>Select a chat to start messaging</p>
                <ChatBubbleOutlineIcon
                    fontSize="70px"
                    className="text-3xl md:text-6xl text-center"
                />
            </div>
        </div>
    );
};