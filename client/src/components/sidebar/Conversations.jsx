import { useEffect, useState } from "react";
import Conversation from "./Conversation";
import { getConversations } from "../../services/messageFetch";
import Loader from "../Loader";
import { getRandomEmoji } from "../../utils/emoji";
import { setSelectedUser, _setConversations} from "../../store/user/actions";
import { useConversations } from "../../store/user/hooks";

const Conversations = () => {
    const [loading, setLoading] = useState(false);
    // const [conversations, setConversations] = useState([]);
    const [selectedId, setSelectedId] = useState("");
    const conversations = useConversations();
    console.log(conversations);
    const fetchConversations = async () => {
        try {
            setLoading(true);
            const response = await getConversations();
            // setConversations(response?.data);
           await _setConversations(response?.data);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const selectUser = async (selectedId) => {
        const user = conversations.find((conversation) => conversation._id === selectedId);
        await setSelectedUser(user);
    };

    useEffect(() => {
        fetchConversations();
    }, []);

    useEffect(() => {
        selectUser(selectedId);
    }, [selectedId]);

    if (loading) <Loader />;

    return (
        <div className="py-2 flex flex-col overflow-auto">
            {conversations.map((conversation) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji}
                    setSelectedId={setSelectedId}
                    selectedId={selectedId}
                />
            ))}
        </div>
    );
};

export default Conversations;
