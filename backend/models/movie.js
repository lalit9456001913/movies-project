import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true        
    },
   
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true      
    },
    rating: {
        type: String,
        required: true
    },
    streamingLink:{
     type:String,
     required:true
    },
}, {timestamps: true});

const Movie = new mongoose.model("Movie", movieSchema)

export default Movie;
