import "./Features.css";
import service from "../img/service.png";
import planning from "../img/skizzieren.png";
import skizzieren from "../img/menschen.png";
import schild from "../img/schild.png";
export default function Features() {
 const items = [
  {
    icon: service,
    title: "MEHR WOHNKOMFORT",
    text: "Langlebige Materialien und präzise Verarbeitung für höchste Ansprüche.",
  },
  {
    icon: planning,
    title: "PLANUNG NACH MAß",
    text: "Individuelle Lösungen perfekt abgestimmt auf Ihr Zuhause.",
  },
  {
    icon: skizzieren,
    title: "FACHGERECHTE MONTAGE",
    text: "Von der Planung bis zur Montage – wir kümmern uns um alles.",
  },
  {
    icon: schild,
    title: "ZUVERLÄSSIGE GARANTIE",
    text: "Sicherheit und Qualität, auf die du dich verlassen kannst.",
  },
];

  return (
    <section className="features">
      {items.map((item, index) => (
        <div className="feature" key={index}>
          <img src={item.icon} alt="" className="feature-icon" />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}