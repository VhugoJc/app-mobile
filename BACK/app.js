// Import the Server class from the server.js file
const Server = require('./models/server');

// Create a new instance of the Server class
const server = new Server();

// Start the server listening for incoming requests
server.listen();
