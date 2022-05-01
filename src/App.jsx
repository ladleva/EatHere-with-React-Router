import "./styles.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Homepage";
import { About } from "./pages/Aboutpage";
import { Menu } from "./pages/Menupage";
import { Layout } from "./Layout";
import { Cash } from "./pages/Cashback";
import { News } from "./pages/Newspage";
import { Contact } from "./pages/Contactspage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cashback" element={<Cash />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}
