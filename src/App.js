import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <SideBar />
            <div className="content">
              <TopBar />
              <Routes>
                <Route path="/" />
              </Routes>
            </div>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext>
  );
}

export default App;
