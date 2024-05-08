import blogRoute from "./routes/blogRoute.js"
import UserRoleRoute from "./routes/userRoleRoute.js"
import UserRoute from "./routes/userRoute.js"
import MessageRoute from "./routes/messageRoute.js"
import TextRoute from "./routes/textRoute.js"
import errorHandler from "./utils/errorHandler.js"
import AdminRoute from './routes/adminRoute.js'
const routersFunction = (app) => {
    
    app.use("/api/v1/admin",AdminRoute)
    app.use("/api/v1/article",blogRoute)
    app.use("/api/v1/user-role",UserRoleRoute)
    app.use("/api/v1/auth",UserRoute)
    app.use("/api/v1/text",TextRoute)
    app.use("/api/v1/messages",MessageRoute)


    app.use(errorHandler)
}
export default routersFunction;
