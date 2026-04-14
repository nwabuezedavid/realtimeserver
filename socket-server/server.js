require("dotenv").config();
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*", // ✅ restrict origin
    methods: ["GET", "POST"],
  },
});

// import socket logic
require("./socket")(io);

httpServer.listen(process.env.PORT || 3001, () => {
  console.log("Socket server running...");
});