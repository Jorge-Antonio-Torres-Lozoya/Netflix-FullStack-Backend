import User from "../models/User.js";
import Movie_catalog from "../models/Movie_catalog.js";


const Query = {
async getUsers() {
    const users = await User.find();
    return users
},

async getMovies_catalog() {
    const movies_catalog = await Movie_catalog.find();
    return movies_catalog
}

}


export default Query