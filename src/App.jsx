import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header/Header";

import Home from "./component/Home/Home";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import Menu from "./component/Menu/Menu";
import Order from "./component/Order/Order";
import Contact from "./component/Contact/Contact";
import BottNav from "./component/bottomNav/BottNav";
import Details from "./component/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />

        <Route path="/Order" element={<Order />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>

      <BottNav />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
