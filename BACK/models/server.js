const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("../db/config");

class Server {
    constructor() {
        // Initialize instance variables
        this.app = express(); // Express app
        this.port = process.env.PORT; // Server port

        this.usersPath = "/api/user";// User API endpoint

        // Initialize server configuration
        this.server = require("http").createServer(this.app); // HTTP server instance

        // Register middleware functions
        this.middlewares();
        // Register application routes
        this.routes();
        // Connect to database
        this.dataBaseConnection();
    }

    /**
     * Registers middleware functions for the Express app.
     */
    middlewares() {
        // Parse request body
        this.app.use(express.json());
        // Enable Cross-Origin Resource Sharing (CORS)
        this.app.use(cors());
    }

    /**
     * Registers application routes for the Express app.
     */

    routes() {
        this.app.use(this.usersPath, require("../routes/user"));
    }
    async dataBaseConnection() {
        await dbConnection();
    }
    listen() {
        this.server.listen(this.port, () => {
            // ascii art: Ansii regular
            console.log(` 
            ███████ ███████ ██████  ██    ██ ███████ ██████          
            ██      ██      ██   ██ ██    ██ ██      ██   ██         
            ███████ █████   ██████  ██    ██ █████   ██████          
                 ██ ██      ██   ██  ██  ██  ██      ██   ██         
            ███████ ███████ ██   ██   ████   ███████ ██   ██ 
            `);

            console.log(`           Server Running in port ${this.port}`);
        });
    }
}

module.exports = Server;