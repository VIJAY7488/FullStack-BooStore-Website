import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    name: {
        type: "String"
    },
    price : {
        type: "Number"
    },
    catergory: {
        type: "String"
    },
    title: {
        type: "String"
    },
    image: {
        type: "String"
    }
})

const Book = mongoose.model('Book', bookSchema);

export default Book;