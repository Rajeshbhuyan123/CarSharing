import { Route, Routes, Navigate } from "react-router-dom";
import "./app.css";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Search from "./components/Search";
import Schedule from "./components/Schedule";
import ConfirmP from "./components/ConfirmP";
import "mapbox-gl/dist/mapbox-gl.css";
import RSignup from "./components/RSignup";
import RLogin from "./components/RLogin";
import RiderPage from "./components/RiderPage"
import Email from "./components/Email";

function App() {
  const user = localStorage.getItem("token");

  return (
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/rlogin" exact element={<RLogin/>} />
        <Route path="/rider" exact element={<RSignup/>} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/page" exact element={<RiderPage/>} />
        <Route path="/email" exact element={<Email/>} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/search" exact element={<Search/>} />
        <Route path="/scheduled" exact element={<Schedule/>} />
        <Route path="/confirmb" exact element={<ConfirmP/>} />
      </Routes>
  );
}

export default App;
