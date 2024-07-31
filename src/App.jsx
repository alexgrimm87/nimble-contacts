import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import {ThemeProvider} from "@mui/material";
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
