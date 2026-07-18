import { socket } from "@/lib/socket";

export const sendMessage = (message: string) => {
  socket.emit("send-message", message);
};

export const joinRoom = (roomId: string) => {
  socket.emit("join-room", roomId);
};
