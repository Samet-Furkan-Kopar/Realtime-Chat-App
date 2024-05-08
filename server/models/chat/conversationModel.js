import mongoose from "mongoose";

const { Schema } = mongoose;
const ConversationSchema = new Schema(
    {
        participants: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }],
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Message",
                default: [],
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Conversation = mongoose.model("Conversation", ConversationSchema);

export default Conversation;
