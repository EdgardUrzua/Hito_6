import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CartProvider} from "./context/CartContext";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar></Navbar>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/register" element={<RegisterPage></RegisterPage>} />
          <Route path="/login" element={<LoginPage></LoginPage>} />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/profile" element={<Profile></Profile>} />
          <Route path="/404" element={<NotFound></NotFound>} />
        </Routes>

        <Footer></Footer>
      </Router>
    </CartProvider>
  );
}

export default App;
