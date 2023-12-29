import Register from "./pages/Register";
import Login from "./pages/Login";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
