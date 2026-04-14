const registerEvents = require("./events");
const authMiddleware = require("./middleware");

module.exports = (io) => {
  io.use(authMiddleware); // ✅ protect connections

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    registerEvents(io, socket);

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};