import React from "react";
import "./Uberdachungen.css";
import img from "../img/WhatsApp Image 2026-05-15 at 11.40.16.jpeg";
import umbrella from '../img/star.png';
import ReviewSection from "./ReviewSection";
import GoogleReviewsSection from "./GoogleReviewsSection";
import { Link } from "react-router-dom";
import zaun from "../img/WhatsApp Image 2026-05-15 at 11.51.31.jpeg";
import carport from "../img/WhatsApp Image 2026-05-15 at 11.42.30.jpeg";
import gelander from "../img/WhatsApp Image 2026-05-15 at 11.44.35.jpeg";
import lamellendach from "../img/WhatsApp Image 2026-05-15 at 11.45.29.jpeg";

const products = [
  {
    title: "Vordach aus Aluminium & Glas ",
    description: "Stilvoller Wetterschutz für Balkon, Terrasse oder Eingang",
    image: img,
   link: "/vordach",
  }
];
   const productsEmpfehlung = [
  {
    title: "Zaun",
    description: "modernes Design und minimalen Pflegeaufwand..",
    image: zaun,
    link: "/zaun",
  },
  {
    title: "Carport",
    description: "Schutz für Ihr Auto und mehr Raum für Ihr Zuhause.",
    image: carport,
    link: "/carport",
  },
  {
    title: "Geländer",
    description: "Erweitern Sie Ihren Wohnraum mit einem lichtdurchfluteten Wintergarten.",
    image: gelander,
    link: "/galänder",
  },
  {
    title: "Lamellendach",
    description: "Modernes Design mit verstellbaren Lamellen für perfekten Sonnenschutz.",
    image: lamellendach,
    link: "/lamellendach",
  }
  ]

export default function Vordachs() {
  return (
    <div className="ueberdachungen-page">
      <header className="header1">
        <h1>Vordachs</h1>
        <div className="header-info1">
          <span>📞 +491747086562</span>
          <span>✓ Professionelle Beratung</span>
          <span>✓ 0% Finanzierung</span>
          <span>✓ Großes Sortiment</span>
        </div>
      </header>

      <section className="product-section">
         <div className="product-toolbar">
    <span className="product-count">{products.length} Artikel</span>
    <div className="sort-container">
      <label htmlFor="sort" className="sort-label">Sortieren nach</label>
      <select id="sort" className="sort-select">
        <option>Artikelname</option>
        <option>Neueste zuerst</option>
        <option>Beliebteste</option>
      </select>
    </div>
  </div>
        <div className="product-grid">
          {products.map((p, index) => (
            <Link key={index} to={p.link} className="product-card">
              <img src={p.image} alt={p.title} />
              <div className="product-info">
                <h3>{p.title}</h3>
                <p className="description">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <div className="ueberdachungen-intro">
      <section className="intro-section">
  <h2>
    <img src={umbrella}  alt="Beschreibung"/> Vordächer
  </h2>

  <p>
    Ein Vordach schützt Ihren Eingangsbereich zuverlässig vor Regen, Schnee und Sonne und sorgt gleichzeitig für einen modernen und einladenden ersten Eindruck Ihres Hauses.
  </p>

  <ul>
    <li>Lange Lebensdauer</li>
    <li>Stabil & wetterfest</li>
    <li>Pflegeleicht</li>
    <li>Nachhaltig & umweltfreundlich</li>
  </ul>

  <p>
    Entdecken Sie unsere Vordach-Lösungen für Haus- und Nebeneingänge – für mehr Schutz, Komfort und eine stilvolle Optik.
  </p>
</section>

      <section className="product-section empfelung">
                   <h3>Produktempfehlungen</h3>
                   <div className="product-grid">
                     {productsEmpfehlung.map((p, index) => (
                       <Link key={index} to={p.link} className="product-card">
                         <img src={p.image} alt={p.title} />
                         <div className="product-info">
                           <h4>{p.title}</h4>
                           <p className="description">{p.description}</p>
                         </div>
                       </Link>
                     ))}
                   </div>
                 </section>
      <ReviewSection />
      <GoogleReviewsSection/>
    </div>
    </div>
  );
}
