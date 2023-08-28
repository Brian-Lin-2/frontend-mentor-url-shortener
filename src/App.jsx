import Login from "./components/account/Login";
import Register from "./components/account/Register";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [login, setLogin] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home login={login} setLogin={setLogin} />}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login setLogin={setLogin} />}></Route>
      </Routes>
    </Router>
  );
}
