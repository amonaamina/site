
import GoogleReviewsSection from './GoogleReviewsSection';
import './KostenloseBeratung.css';
import LocationSection from './LocationSection';
import ReviewSection from './ReviewSection';
export default function KostenloseBeratung() {
  const whatsappNumber = "+491747086562";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=https://wintergartenmeister.de`;

  return (
    <div className="beratung-wrapper">

      {/* HEADER */}
      <h1 className="beratung-title">Kostenlose Beratung</h1>
      <p className="beratung-subtitle">
        Ihre Überdachung. Ihr Lieblingsplatz. Unsere Expertise.
      </p>
      <hr className="beratung-divider" />

      {/* INTRO TEXT */}
      <div className="beratung-intro">
        <p className="beratung-intro-text">
          Sie möchten Ihren Außenbereich hochwertig gestalten und in einen Ort verwandeln,
          an dem Sie sich rundum wohlfühlen? Wir unterstützen Sie dabei mit einer
          persönlichen, unverbindlichen und kostenfreien Beratung – abgestimmt auf Ihre
          Wünsche und Ihr Zuhause.
        </p>

        <p className="beratung-intro-subtext">
          Gemeinsam finden wir die passende Lösung für Ihren neuen Lieblingsplatz im Freien.
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div className="beratung-grid">

  {/* LINKE SPALTE */}
  <div className="beratung-left">
    <h2 className="beratung-heading">Kontaktinformationen</h2>

    <div className="kontakt-block">
      <strong>Anschrift</strong>
      <p>
        Ertugrul Erkan<br />
        Robert Stolz Straße 23<br />
        47057 Düsseldorf
      </p>
    </div>

    <div className="kontakt-block">
      <strong>Telefon</strong>
      <p>
        <a href="tel:++491747086562">++491747086562</a>
      </p>
    </div>

    <div className="kontakt-block">
      <strong>E‑Mail</strong>
      <p className='t'>
        <a  href="mailto:info@wintergartenmeister.de">
          ceysaas@gmail.com
        </a>
      </p>
    </div>
  </div>

  {/* RECHTE SPALTE */}
  <div className="beratung-right">
    <h2 className="beratung-heading">Direkt per WhatsApp</h2>

    <p className="beratung-text">
      Sie bevorzugen eine schnelle und unkomplizierte Kontaktaufnahme?
      Schreiben Sie uns einfach über WhatsApp. Wir melden uns zeitnah persönlich bei Ihnen.
    </p>

    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      WhatsApp öffnen
    </a>
  </div>

</div> 
<LocationSection/>
<ReviewSection></ReviewSection>
<GoogleReviewsSection/>

    </div>
  );
}
