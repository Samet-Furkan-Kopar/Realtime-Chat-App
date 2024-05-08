import mongoose from "mongoose";

const {
    Schema
} = mongoose;
const MessageSchema = new Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    message: {
        type: String,
        require: true
    },
    IsSeen:{
        type:Boolean,
        default:false
    }

}, {
    timestamps: true
})

const Message = mongoose.model("Message", MessageSchema)

export default Message