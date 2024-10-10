import mongoose from "mongoose";
// import mongoose from "mongodb";

const bookSchema = mongoose.Schema({
    name : String,
    price : Number,
    title : String,
    category : String,
    image : String
});

const Book = mongoose.model("Book", bookSchema);
export default Book;