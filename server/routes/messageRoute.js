// import FormData from "../middlewares/blogPhotoMiddleware.js"
import express  from "express"
import Chat from "../controllers/chat/chatController.js"
import FormData from "../middlewares/userPhotoMiddleware.js"
import Auth from "../middlewares/userAuthMiddleware.js"

const router = express.Router()

router.route("/:id").get(Auth.authenticateUserAPIToken,Chat.getMessages)
router.route("/send/:id").post(Auth.authenticateUserAPIToken,FormData.uploadSettingImages,Chat.sendMessage)
router.route("/").get(Auth.authenticateUserAPIToken,Chat.getUsersForSidebar)


export default router