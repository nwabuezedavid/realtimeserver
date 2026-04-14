module.exports = (io, socket) => {

  // Join room
  socket.on("join_room", (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  // Send message
  socket.on("send_message", ({ roomId, message }) => {
    io.to(roomId).emit("receive_message", {
      message,
      userId: socket.user.id,
    });
  });

};