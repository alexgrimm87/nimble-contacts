import {Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact/:id" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;
