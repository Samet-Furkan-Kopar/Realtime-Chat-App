import mongoose from "mongoose";
import bcrypt from "bcrypt"
const {
    Schema
} = mongoose;
const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: false,
        // unique: true
        default:""
    },
   
    password: {
        type: String,
        require: false
    },
   
    image_url: {
        type: String,
        default:""
    },

    // type:{
    //     type:String,
    //     enum:["admin","user"]
    // },
    tokens:[{type: Object}]

}, {
    timestamps: true
})
userSchema.pre("save", function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, (err, hash) => {
        user.password = hash;
        next();
    })
})

const User = mongoose.model("User", userSchema)

export default User