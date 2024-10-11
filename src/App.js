import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/about" element={About} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
