import { socket } from "@/lib/socket";

export const sendMessage = (message) => {
  socket.emit("send-message", message);
};

export const joinRoom = (roomId) => {
  socket.emit("join-room", roomId);
};
