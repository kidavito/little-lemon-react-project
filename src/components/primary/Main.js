import Home from "../../pages/Home";
import About from "../../pages/About";
import Menu from "../../pages/Menu";
// import Reservations from "../../pages/Reservations";
import BookingPage from "../../pages/BookingPage";
import OrderOnline from "../../pages/OrderOnline";
import Login from "../../pages/Login";
import { Routes, Route } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/little-lemon-react-project" element={<Home />}></Route>
        <Route
          path="/little-lemon-react-project/about"
          element={<About />}
        ></Route>
        <Route
          path="/little-lemon-react-project/menu"
          element={<Menu />}
        ></Route>
        <Route
          path="/little-lemon-react-project/reservations"
          element={<BookingPage />}
        ></Route>
        <Route
          path="/little-lemon-react-project/order-online"
          element={<OrderOnline />}
        ></Route>
        <Route
          path="/little-lemon-react-project/login"
          element={<Login />}
        ></Route>
      </Routes>
    </main>
  );
}
