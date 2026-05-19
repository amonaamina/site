import React from "react";
import "./Willkommen.css";
import ReviewSection from "./ReviewSection";
import GoogleReviewsSection from "./GoogleReviewsSection";
import { Link } from "react-router-dom";

const Willkommen = () => {
  return (
    <section className="simple-intro">
      <div className="dd">

        <div className="simple-intro__inner">

          <h1 className="simple-intro__title">
            Willkommen bei Alu Schmidt – dein Partner für hochwertige Outdoor‑Lösungen
          </h1>

          <p className="simple-intro__text">
            Wir gestalten Außenbereiche, die nicht nur schützen, sondern dein Zuhause
            aufwerten. Ob Terrassenüberdachung, Markise oder Kaltwintergarten –
            wir schaffen Räume, die du jeden Tag genießen wirst.
          </p>

          <p className="simple-intro__text">
            Unser Einsatzgebiet: Schwelm + bis zu 300 km Umkreis.  
            Düsseldorf, Dortmund, Essen, Münster, Köln oder Bonn – wir kommen zu dir
            und setzen dein Projekt zuverlässig um.
          </p>

          <h2 className="simple-intro__subheadline">Warum Kunden uns vertrauen</h2>

          <ul className="simple-intro__list icons">
            <li>Hochwertige, langlebige Materialien</li>
            <li>Transparente Beratung ohne Verkaufsdruck</li>
            <li>Präzise, saubere und zuverlässige Montage</li>
            <li>Faire Preise ohne versteckte Kosten</li>
          </ul>

          <h2 className="simple-intro__subheadline">Unsere Leistungen</h2>

          <ul className="simple-intro__list icons">
            <li>Terrassenüberdachungen</li>
            <li>Kaltwintergärten</li>
            <li>Markisen</li>
            <li>Glasschiebeelemente</li>
            <li>Zubehör & Erweiterungen</li>
          </ul>

          <p className="simple-intro__text s">
            Entdecke echte Kundenprojekte auf Instagram und lass dich inspirieren.
          </p>

          <a href="https://www.instagram.com/wintergartenmeister/?utm_source=ig_web_button_share_sheet" className="simple-intro__btn">
            Jetzt entdecken
          </a>

          <p className="simple-intro__claim">
            Dein neuer Lieblingsplatz wartet. Kostenlose Erstberatung – persönlich & verbindlich.
          </p>

          <Link to="/beratung" className="kontactWilkommen">
            Kontakt aufnehmen
          </Link>

        </div>

        <div className="d">
          <ReviewSection />
          <GoogleReviewsSection />
        </div>

      </div>
    </section>
  );
};

export default Willkommen;
