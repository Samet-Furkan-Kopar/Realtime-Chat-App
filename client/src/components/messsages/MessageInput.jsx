import SendIcon from "@mui/icons-material/Send";
import Loader from "../Loader";

const MessageInput = ({ sendMessage, setMessage, message, loading }) => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && message.trim() !== ""){
            sendMessage();
        }
    };
    const handleClick = () => {
        if (message.trim() !== '') { // Boş mesajı göndermemek için kontrol
            sendMessage();
        }
    };
    return (
        <div className="px-4 my-3">
            <div className="w-full relative">
                <input
                    type="text"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    onKeyDown={handleKeyDown}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
                    placeholder="Send a message..."
                />
                <button
                    type="button"
                    onClick={handleClick}
                    className="absolute inset-y-0 end-0 flex items-center px-3"
                >
                   {!loading ?  <SendIcon className="text-gray-300" /> : <Loader />}
                </button>
            </div>
        </div>
    );
};

export default MessageInput;
