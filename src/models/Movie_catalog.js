import { Schema, model } from "mongoose";

const movie_catalogSchema = new Schema( {
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    likes: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    date_of_released: {
        type: Number,
        require: true
    }
   
} );
export default model('movie_catalog', movie_catalogSchema)