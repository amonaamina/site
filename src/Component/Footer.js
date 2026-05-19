// Footer.jsx
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* COLUMN 1 */}
        <div className="footer__col">
          <h4>INFORMATIONEN</h4>
          <ul>
  <li><Link to="/ueber-uns">Über Wintergartenmeister</Link></li>
  <li><Link to="/terrasenübertachung">Terrassenüberdachung</Link></li>
  <li><Link to="/vordachs">Vordach</Link></li>
  <li><Link to="/carports">Carport</Link></li>
  <li><Link to="/geländers">Geländer</Link></li>
  <li><Link to="/lamellendachs">Lamellendach</Link></li>
  <li><Link to="/markisen">Markise</Link></li>
  <li><Link to="/solarTerrassenüberdachungen">Solar-Überdachungen</Link></li>
  <li><Link to="/glasschiebeelementen">Glasschiebeelemente</Link></li>
  <li><Link to="/zauns">Zaun</Link></li>
</ul>
        </div>

        {/* COLUMN 2 */}
        <div className="footer__col">
          <h4>RECHTLICHES</h4>
          <ul>
  <li><Link to="/impressum">Impressum</Link ></li>
  <li><Link to="/datenschutz">Datenschutz</Link></li>
  <li><Link to="/agb">AGB</Link></li>
  <li><Link to="/widerrufsrecht">Widerrufsrecht</Link></li>
</ul>
        </div>

        {/* COLUMN 3 */}
        <div className="footer__col footer__about">
          <p>
            <strong>Wintergartenmeister GmbH</strong> 
          </p>
          <p className="p">Überdachungen & Alu-Systeme für Terrasse,Balkon und Garten.</p>
          <p className="p">Mo-Fr:09:00-18:00</p>
          <p className="p">Sa:09:00-15:00</p>
          <p className="p">Tel:01747086562</p>
          <p className="p">email:info@wintergartenmeister.de </p>
        </div>

      </div>
      <hr className="hr"/>
       <p className="footer_Id">© All rights reserved.</p>
    </footer>
  );
}