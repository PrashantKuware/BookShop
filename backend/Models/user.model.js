import mongoose from "mongoose";
// import mongoose from "mongodb";


const userSchema = mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
})
const User = mongoose.model("User", userSchema)
export default User;