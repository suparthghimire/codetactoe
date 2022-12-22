import Menu from "./pages/Menu";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import Lobby from "./pages/Lobby";
import Game from "./pages/Game";
function App() {
  const appendCache = createEmotionCache({ key: "mantine", prepend: false });

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={appendCache}
    >
      <Game />
    </MantineProvider>
  );
}

export default App;
