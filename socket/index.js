const authMiddleware = require("./middleware");

module.exports = (io) => {
  io.use(authMiddleware);

  io.on("connection", (socket) => {
    console.log("Authorized user:", socket.id);

    socket.on("disconnect", () => {
      console.log("Disconnected:", socket.id);
    });
  });
};