import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Forums from "../Pages/Forums";
import Games from "../Pages/Games";
import Cafe from "../Pages/Cafe";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Profile from "../Pages/Profile";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NotFound from "../Pages/NotFound";
import Uno from "../Pages/Uno";
import King from "../Pages/King";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout with Navbar and Footer */}
        <Route
          path="/*"
          element={[
            <Navbar key="navbar" />,
            <Routes key="routes">
              <Route index element={<Home />} />
              <Route path="/forums/*" element={<Forums />} />
              <Route path="/games" element={<Games />} />
              <Route path="/cafe/*" element={<Cafe />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/Uno" element={<Uno />} />
              <Route path="/King" element={<King />} />
              <Route path="*" element={<NotFound />} />
            </Routes>,
            <Footer key="footer" />,
          ]}
        />

        {/* Login and Registration Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}
