import { useState } from "react";
import "./Header.css";
import logo from "../img/Copilot_20260514_184432.png"; 
import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";
import burgerIcon from "../img/burger-menu.png";
import closeIcon from "../img/buchstabe-x.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <HeroSection/>
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/">
          <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/terrasenübertachung">Terrassenüberdachung</Link>
         <Link to="/vordachs">Vordach</Link>
          <Link to="/carports">Carport </Link>
           <Link to="/geländers">galänder</Link>
         <Link to="/lamellendachs">Lamellendach</Link>
          <Link to="/markisen">Markise</Link>
          <Link to="/solarTerrassenüberdachungen">Solar-Überdachungen</Link>
          <Link to="/glasschiebeelementen">Glasschiebeelemente</Link>
          <Link to="/zauns">Zaun</Link>
          
        </nav>

        {/* Burger */}
        <div className="burger"
  onClick={() => setOpen(!open)}
>
  <img
    src={open ? closeIcon : burgerIcon}
    alt={open ? "Menü schließen" : "Menü öffnen"}
  />
</div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
 
   <Link  to="/" onClick={() => setOpen(false)} >Home</Link>
          <Link to="/terrasenübertachung" onClick={() => setOpen(false)}> Terrassenüberdachung</Link>
         <Link  to="/vordachs" onClick={() => setOpen(false)}>Vordach</Link>
         <Link  to="/carports" onClick={() => setOpen(false)}>Carport</Link>
         <Link to="/geländers" onClick={() => setOpen(false)}>Geländer</Link>
          <Link to="/lamellendachs" onClick={() => setOpen(false)} href="#">Lamellendach</Link>
         <Link to="/markisen" onClick={() => setOpen(false)} href="#">Markise</Link>
         <Link to="/solarTerrassenüberdachungen" onClick={() => setOpen(false)} >Solar- Überdachungen</Link>
        <Link to="/glasschiebeelementen" onClick={() => setOpen(false)}  >Glasschiebenelementen</Link>
        <Link to="/zauns" onClick={() => setOpen(false)}  >Zaun</Link>

</div>
    </header>
  );
}