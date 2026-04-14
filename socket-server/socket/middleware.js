module.exports = (socket, next) => {
  const token = socket.handshake.auth.token;

  if (!token) {
    return next(new Error("Unauthorized"));
  }

  // TODO: verify JWT here
  // const user = verifyToken(token);

  socket.user = { id: "userId" }; // attach user
  next();
};