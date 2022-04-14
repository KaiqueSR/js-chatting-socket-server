/* eslint-disable no-unused-vars */
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer();
const io = new Server(server);

let connectedUsers = [];

io.on("connection", socket => {
//   socket.on("user logged in", async username => {
//     connectedUsers.push({ id: socket.id, username });
//     io.emit("new user connected", username);
//     io.emit(
//       "connected users",
//       connectedUsers.map(user => user.username)
//     );
//   });

  //   socket.on("disconnect", () => {
  //     connectedUsers = connectedUsers.filter(user => user.id != socket.id);
  //     io.emit(
  //       "connected users",
  //       connectedUsers.map(user => user.username)
  //     );
  //   });

  //   socket.on("send message", message => {
  //     socket.broadcast.emit("new message", message);
  //   });

  console.log("Someone connected");
});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});