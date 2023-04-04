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
},
async loginUser(_, { email,password }) {
    const user = await User.findOne({email,password});
    if(!user){
        throw new Error('El usuario no existe')
       }
    return user
},

async findByTitle(_, { title }) {
    const regex = new RegExp(title, 'i');
    const movie = await Movie_catalog.find({title:regex});
    // if(!employee){
    //     throw new Error('El empleado no existe')
    //    }
    return movie
}




}


export default Query