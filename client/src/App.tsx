import Menu from "./pages/Menu";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import Lobby from "./pages/Lobby";
import Game from "./pages/Game";

import SocketProvider from "./context/SocketContext";

function App() {
  const appendCache = createEmotionCache({ key: "mantine", prepend: false });

  return (
    <SocketProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={appendCache}
      >
        <Game />
      </MantineProvider>
    </SocketProvider>
  );
}

export default App;
