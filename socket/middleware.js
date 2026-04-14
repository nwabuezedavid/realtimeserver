module.exports = (socket, next) => {
  const clientKey = socket.handshake.auth.key;

  if (!clientKey) {
    return next(new Error("No API key provided"));
  }

  if (clientKey !== process.env.SOCKET_SECRET_KEY) {
    return next(new Error("Invalid API key"));
  }

  next();
};