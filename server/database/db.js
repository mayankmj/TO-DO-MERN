// to make connection with mongo with use mongoose
// because direct connection with db thorught express not possible
// mongoose =>     node.js -> mongoose -> mongodriver -> cloud_mogodb 
import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const USERNAME =process.env.DB_USERNAME;
const PASSWORD =process.env.DB_PASSWORD;
const Connection = () =>{

    const MONGODB_URI=`mongodb://${USERNAME}:${PASSWORD}@ac-1bjzt7q-shard-00-00.rf3ezgt.mongodb.net:27017,ac-1bjzt7q-shard-00-01.rf3ezgt.mongodb.net:27017,ac-1bjzt7q-shard-00-02.rf3ezgt.mongodb.net:27017/?ssl=true&replicaSet=atlas-kqvkix-shard-0&authSource=admin&retryWrites=true&w=majority`
    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
     
    //'connected is not a comment it is a field for mongo'
    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database',error.message);
    })
}

export default Connection;