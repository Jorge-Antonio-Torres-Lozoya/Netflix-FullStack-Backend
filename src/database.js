import mongoose from "mongoose"

export async function connect() {
    
    try {
        await mongoose.connect( process.env.MONGO_URI, {
            useNewUrlParser: true
       } )
        console.log("Database connected!!")
    } catch (error) {
        return console.log('Something went wrong!!', error)
    }
  
}
