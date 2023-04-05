// Import the mongoose library
const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

/**
 * Establishes a connection to the MongoDB database specified in the 
 * MONGODB_URL environment variable.
 * @returns {Promise<void>} A promise that resolves once the connection is established.
 * @throws {Error} If there is an error connecting to the database.
 */
const dbConnection = async ()=>{
    try{
        // Connect to the MongoDB database using the MONGODB_URL environment variable
        await mongoose.connect(process.env.MONGODB_URL,{
            /*NOTE: Mongoose 6 doesnt need it*/
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex:true,
            // useFindAndModify:false
        });
        // Log a success message to the console if the connection is successful
        console.log(`           DB Connected [${process.env.MONGODB_URL}]`);
    }catch(err){
        // Log an error message to the console if there is an error connecting to the database
        console.log(`           DB ERROR: ${err}`);
        // Throw an error to indicate that there was an error connecting to the database
        throw new Error(`DB ERROR`);
    }
}

// Export the dbConnection function so that it can be used by other parts of the application
module.exports={
    dbConnection
}
