import GoogleReviewsSection from "./GoogleReviewsSection";
import "./Impressum.css";
import ReviewSection from "./ReviewSection";

export default function Impressum() {
  return (
    <div>
      <div className="impressum">
      <h1>Impressum</h1>

      <div className="block">
      <h4>Impressum</h4>

        <p className="p">Angaben gemäß Informationspflicht laut § 5 Telemediengesetz (TMG).</p>
        <p>Ertugrul Erkan</p>
        <p>Wintergartenmeister.de</p>
        <p>Robert Stolz Straße 23</p>
        <p>47057 Düsseldorf</p>
      </div>

      <div className="block">
        <p><b>Tel.:</b> ++491747086562</p>
        <p><b>Fax:</b> ++491747086562</p>
        <p><b>E-Mail:</b> info@wintergartenmeister.de</p>
      </div>

      <div className="block">
        <p><b>Berufsbezeichnung: </b>Handwerker</p>
        <p>Verliehen in: Deutschland</p>
      </div>
<div className="block k">
        <h2>Haftung für Inhalte dieser Website
</h2>
        <p>
          Wir entwickeln die Inhalte dieser Website ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Website übernehmen, speziell für jene, die seitens Dritter bereitgestellt wurden. Als Diensteanbieter sind wir nicht verpflichtet, die von Ihnen übermittelten oder gespeicherten Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch im Falle unserer Nichtverantwortlichkeit davon unberührt.</p>
      <p>Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im Impressum.</p>
      </div>
      <div className="block k">
        <h2>Urheberrechtshinweis
</h2>
        <p>
        Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Bitte fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen oder verwerten wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.
        </p>
        <p>Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie uns zu kontaktieren.</p>
      </div>
      <div className="block k">
        <h2>Bildernachweis</h2>
        <p>
          Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.
        </p>
      </div>

      <div className="block k">
        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
<div className="block">
        <h2>Datenschutz Kontakt</h2>
        <p>
          Bei Fragen zum Datenschutz wenden Sie sich bitte an die oben
          genannten Kontaktdaten.
        </p>
      </div>
      <div className="block">
        <h2>Quelle</h2>
        <a
          href="https://www.e-recht24.de"
          target="_blank"
          rel="noreferrer"
        >
          https://www.e-recht24.de
        </a>
      </div>

      
      
    </div><div className="impreR">
      
       <div className="d">
        <ReviewSection/>
      <GoogleReviewsSection/>
       </div>
    </div>
    </div>
 
  );
}