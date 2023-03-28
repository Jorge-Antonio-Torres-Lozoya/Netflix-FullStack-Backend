import User from "../models/User.js";
import Movie_catalog from "../models/Movie_catalog.js";

const Mutation = {

async createMovie_catalog( _ , { tittle,description,likes,image,date_of_released} ) {
    const newMovie_catalog = { tittle,description,likes,image,date_of_released };
    const movie_catalogExiste = await Movie_catalog.findOne({tittle })
    if (movie_catalogExiste) {
        throw new Error('Esa pelicula ya existe')
    }
    const movie_catalog = await Movie_catalog.create( newMovie_catalog ); //returns { }
    return movie_catalog
},

async createUser( _ , { name,email,password} ) {
    const newUser = { name,email,password };
    const userExiste = await User.findOne({ email })
    if (userExiste) {
        throw new Error('Ese usuario ya existe')
    }
    const user = await User.create( newUser ); //returns { }
    return user
}


}

export default Mutation;