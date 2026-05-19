import "./RatgeberSection.css";
import img from "../img/../img/Copilot_20260426_090951.png"
import { Link } from "react-router-dom";
export default function RatgeberSection() {
  const articles = [
    {
      title: "Wintergarten einrichten Ideen",
      desc: "Ein Wintergarten verbindet das Beste aus beiden Welten – Gemütlichkeit und Natur...",
      image: img,
      link: "/WintergartenExtended"
    },
    {
      title: "Ausgefallener Sichtschutz im Garten",
      desc: "Privatsphäre mit Stil – kreative Lösungen für moderne Außenbereiche...",
      image: img,
      link: "/ratgeber/sichtschutz-garten"
    },
    {
      title: "Gartengestaltung",
      desc: "Struktur, Pflanzen und Materialien für ein harmonisches Gesamtbild...",
      image: img,
      link: "/ratgeber/gartengestaltung"
    },
    {
      title: "Wintergarten aus Holz selber bauen",
      desc: "Natürlich, warm und nachhaltig – der Charme des Holz‑Wintergartens...",
      image: img,
      link: "/ratgeber/wintergarten-holz"
    },
  ];

  return (
    <section className="ratgeber-section">
      <h2 className="ratgeber-title">Ratgeber & Inspiration</h2>
      <p className="ratgeber-subtitle">
        Entdecken Sie Ideen für Ihren Garten und Wintergarten.
      </p>

      <div className="ratgeber-grid">
        {articles.map((a, i) => (
          <Link to={a.link} className="ratgeber-card" key={i}>
            <img src={a.image} alt={a.title} className="ratgeber-image" />
            <div className="ratgeber-content">
              <h3 className="ratgeber-card-title">{a.title}</h3>
              <p className="ratgeber-card-desc">{a.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
