// import FormData from "../middlewares/blogPhotoMiddleware.js"
import express  from "express"
import Text from "../controllers/text/textController.js"
import FormData from "../middlewares/userPhotoMiddleware.js"

const router = express.Router()


router.route("/summarization").post(FormData.uploadSettingImages,Text.textSummarization)


export default router