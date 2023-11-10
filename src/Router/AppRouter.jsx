import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Forums from "../Pages/Forums";
import Cafe from "../Pages/Cafe";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import MainTemplate from "../Templates/MainTemplate";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainTemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="/Forums" element={<Forums />} />
          <Route path="/Cafe" element={<Cafe />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}
