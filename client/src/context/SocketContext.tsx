import { createContext, useContext, useState } from "react";
import io, { Socket } from "socket.io-client";

interface SocketContextType {
  socket: Socket | null;
  connectToServer: () => void;
  emitData: (roomId: string, message: string, key: string) => void;
}

const SocketContext = createContext<SocketContextType>({
  connectToServer: () => {},
  socket: null,
  emitData: (roomId: string, message: string, key: string) => {},
});

export const useSocket = () => {
  return useContext(SocketContext);
};

export default function SocketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [socket, setSocket] = useState<Socket | null>(null);

  function connectToServer() {
    const serverEndpoint =
      import.meta.env.VITE_SERVER_URL || "http://localhost:3001";
    const socket = io(serverEndpoint);
    setSocket(socket);
  }

  function emitData(roomId: string, message: string, key: string) {
    if (socket) {
      socket.emit(key, { roomId, message });
    }
  }

  return (
    <SocketContext.Provider
      value={{
        socket,
        connectToServer,
        emitData,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}
