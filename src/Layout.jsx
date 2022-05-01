import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const setActive = ({ isActive }) =>
  isActive ? "active-link" : "no-active-link";

const Layout = () => {
  return (
    <div>
      <header>
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/about" className={setActive}>
          About us
        </NavLink>
        <NavLink to="/menu" className={setActive}>
          Menu
        </NavLink>
        <NavLink to="/cashback" className={setActive}>
          CashBack
        </NavLink>
        <NavLink to="/news" className={setActive}>
          News
        </NavLink>
        <NavLink to="/contact" className={setActive}>
          Contact us
        </NavLink>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <h3 className="footerItem">© 2022 by OWN PTIVACY</h3>
        <h3 className="footerItem">+19990009900</h3>
      </footer>
    </div>
  );
};

export { Layout };
