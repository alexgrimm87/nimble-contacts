import {Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;
