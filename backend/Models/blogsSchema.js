import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    admin :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "admins"
    },
    author : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true,
    },
    img : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now()
    },
    comments : [
        {
            type : String
        }
    ]
})

const blogModel = mongoose.model("blogs",blogSchema);
export default blogModel;