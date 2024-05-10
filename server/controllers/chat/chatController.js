import tryCatch from "../../utils/tryCatch.js";
import Conversations from "../../models/chat/conversationModel.js";
import Message from "../../models/chat/messageModel.js";
import { io } from "socket.io-client";
import User from "../../models/user/userModel.js";
const socket = io("http://localhost:8800");

const sendMessage = tryCatch(async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        console.log("receiverId: ", receiverId);
        const senderId = req.user._id;
        console.log("senderId: ", senderId);
        let conversation = await Conversations.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversations.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        await Promise.all([conversation.save(), newMessage.save()]);
        socket.emit("chatUser", {
          message: newMessage,
          });
        res.status(201).json({
            succeded: true,
            data: newMessage,
            message: "Message sent successfully",
        });
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
    
});
//Kullanıcılar arasındaki msj gösteriyor
const getMessages = tryCatch(async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversations.findOne({
            participants: { $all: [senderId, receiverId] },
        }).populate("messages");

        if (!conversation) return res.status(200).json([]);

        res.status(200).json({
            succeded: true,
            data: conversation.messages,
        });
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});
const getUsersForSidebar = tryCatch(async (req, res) => {
  try {
      const loggeedInUserId = req.user._id;
     const filteredUsers = await User.find({ _id: { $ne: loggeedInUserId } }).select("-password -tokens");

     res.status(200).json({
      succeded: true,
      data: filteredUsers,
     })
  } catch (error) {
      console.log("Error in getUsersForSidebar",error.message);
      res.status(500).json({error: "Internal server error"});
 
  }
});
const chat = {
    sendMessage,
    getUsersForSidebar,
    getMessages,
};

export default chat;
