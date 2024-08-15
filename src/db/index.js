import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async() => {
    try {
        const connectioninstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connected with db and connected with host ${connectioninstance.connection.host}`)
        
    } catch (error) {
        console.error("Failed to connect the MONGODB", error)
        process.exitCode=1
    }
}

export default connectDB
