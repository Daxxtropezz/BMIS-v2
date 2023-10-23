import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import { Box } from "@mui/material";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Box className="App">
        <Header />
      </Box>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
