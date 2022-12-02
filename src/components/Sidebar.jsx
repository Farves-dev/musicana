import { useState } from "react";
import { NavLink } from "react-router-dom";
import { lightLogo } from "../assets/index";
import { darkLogo } from "../assets/index";
import { lightLeftPhoneWave } from "../assets/index";
import { links } from "../assets/constants";
import { IoClose } from "react-icons/io5";
import { CgMenuLeft } from "react-icons/cg";
import "../styles/main.scss";
import DarkMode from "./DarkMode";

const NavLinks = ({ handleClick }) => (
  <div className="navlinks-container">
    {links.map((item) => (
      <NavLink
        className="navlinks"
        key={item.name}
        onClick={() => handleClick && handleClick()}
        to={item.to}
      >
        <item.icon className="navlinks-icons" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="sidebar-container">
        <DarkMode />
        <div className="logo" />
        <NavLinks />
      </div>

      <div className="sidebar-icons">
        {mobileMenuOpen ? (
          <IoClose
            className="menu-icon"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <CgMenuLeft
            className="menu-icon"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`mobSidebar-container ${
          mobileMenuOpen ? "openMob" : "closeMob"
        }`}
      >
        <div className="mob-wave"/>
        <DarkMode />
        <div className="logo" />
        <NavLinks
          handleClick={() => setMobileMenuOpen(false)}
          className="mob-navLinks"
        />
      </div>
    </>
  );
};

export default Sidebar;
