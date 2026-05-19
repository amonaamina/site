import "./ProductSectionExplore.css";
import { Link } from "react-router-dom";
import Terrassenüberdachung from "../img/WhatsApp Image 2026-05-15 at 11.35.39 (1).jpeg";
import gelander from "../img/WhatsApp Image 2026-05-15 at 11.44.35.jpeg";
import carport from "../img/WhatsApp Image 2026-05-15 at 11.42.30.jpeg";
import lamellendach from "../img/WhatsApp Image 2026-05-15 at 11.45.29.jpeg";

export default function ProductSectionExplore() {
  const products = [
    {
      title: "Terrassenüberdachungen",
      desc: "Schutz vor Wetter & mehr Komfort im Außenbereich",
      image: Terrassenüberdachung,
      link:"/terrasenübertachung"
    },
    {
      title: "carport",
      desc: "Schutz für Ihr Auto und mehr Raum für Ihr Zuhause",
      image: carport,
      link:"/carports"

    },
    {
      title: "Lamellendächer",
      desc: "Flexibler Sonnenschutz per Knopfdruck",
      image: lamellendach,
      link:"/lamellendachs"

    },
    {
      title: "Geländer",
      desc: "Sicherheit trifft modernes Design",
      image: gelander,
      link:"/geländers"

    },
  ];

  return (
    <section className="product-modern">
      <div className="container">
        <span className="label">UNSERE PRODUKTE</span>

        <h2>Architektur für moderne Außenbereiche</h2>

        <p className="subtitle">
          Hochwertige Systeme für Design, Komfort und langlebige Qualität.
        </p>

        <div className="grid">
          {products.map((p, i) => (
            <div className="card" key={i}>
              <div className="imageWrapper">
                <img src={p.image} alt={p.title} />
              </div>

              <div className="content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>

                <Link to={p.link} className="more">
                  Mehr erfahren →
                </Link>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}