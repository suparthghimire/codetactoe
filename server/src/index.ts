import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const httpServer = createServer(app);

const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("a user connected");
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
