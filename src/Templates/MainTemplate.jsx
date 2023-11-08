import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

export default function MainTemplate() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
