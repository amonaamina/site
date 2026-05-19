import "./Widerruf.css";
import ReviewSection from "./ReviewSection";
import GoogleReviewsSection from "./GoogleReviewsSection";
export default function Widerruf() {
  return (
    <section className="widerruf-section">

      <div className="widerruf-container">

        <h1>Widerrufsrecht</h1>

        <p>
          Verbraucher haben das gesetzliche Recht, innerhalb von vierzehn Tagen
          ohne Angabe von Gründen vom geschlossenen Vertrag zurückzutreten.
        </p>

        <p>
          Als Verbraucher gilt jede natürliche Person, die ein Rechtsgeschäft
          überwiegend zu privaten und nicht zu gewerblichen oder beruflichen
          Zwecken abschließt.
        </p>

        {/* WIDERRUFSFRIST */}
        <div className="widerruf-box">
          <h2>Widerrufsfrist</h2>

          <p>
            Die Frist für den Widerruf beträgt 14 Tage ab dem Tag,
            an dem Sie oder eine von Ihnen benannte Person die Ware erhalten haben.
          </p>
        </div>

        {/* WIDERRUF AUSÜBEN */}
        <div className="widerruf-box">
          <h2>Ausübung des Widerrufs</h2>

          <p>
            Um Ihr Widerrufsrecht zu nutzen, müssen Sie uns eindeutig
            über Ihre Entscheidung informieren.
          </p>

          <p>
            Dies kann per E-Mail oder schriftlich erfolgen.
          </p>

          <div className="kontakt-box">
            <p><strong>Wintergartenmeister</strong></p>
            <p>Ertugrul Erkan</p>
            <p>Robert Stolz Straße 23</p>
            <p>47057 Düsseldorf</p>
            <p>E-Mail: info@wintergartenmeister.de </p>
            <p>Telefon: +49 174 7086562</p>
          </div>
        </div>

        {/* FOLGEN */}
        <div className="widerruf-box">
          <h2>Folgen des Widerrufs</h2>

          <p>
            Nach Eingang Ihres Widerrufs erstatten wir alle bereits geleisteten
            Zahlungen inklusive der Standard-Lieferkosten innerhalb von
            14 Tagen zurück.
          </p>

          <p>
            Die Rückzahlung erfolgt über dasselbe Zahlungsmittel,
            das bei der ursprünglichen Bestellung verwendet wurde.
          </p>

          <p>
            Wir behalten uns vor, die Rückzahlung zurückzuhalten,
            bis die Ware wieder bei uns eingegangen ist oder ein
            Rücksendenachweis vorliegt.
          </p>

          <p>
            Die Rücksendung der Ware muss spätestens innerhalb von
            14 Tagen nach Mitteilung des Widerrufs erfolgen.
          </p>

          <p>
            Die unmittelbaren Kosten der Rücksendung trägt der Käufer.
          </p>
        </div>

        {/* FORMULAR */}
        <div className="widerruf-box">
          <h2>Muster-Widerrufsformular</h2>

          <p>
            Wenn Sie den Vertrag widerrufen möchten,
            können Sie folgendes Formular verwenden:
          </p>

          <div className="formular">

            <p>An:</p>

            <p>Wintergartenmeister</p>
            <p>Ertugrul Erkan</p>
            <p>Robert Stolz Straße 23</p>
            <p>47057 Düsseldorf</p>
            <p>E-Mail: info@wintergartenmeister.de </p>

            <br />

            <p>
              Hiermit widerrufe ich / widerrufen wir den abgeschlossenen Vertrag
              über den Kauf der folgenden Waren oder Dienstleistungen:
            </p>

            <div className="line"></div>

            <p>Bestellt am / erhalten am:</p>

            <div className="line small"></div>

            <p>Name des Verbrauchers:</p>

            <div className="line"></div>

            <p>Anschrift des Verbrauchers:</p>

            <div className="line"></div>

            <p>Unterschrift (nur bei schriftlicher Mitteilung):</p>

            <div className="line small"></div>

            <p>Datum:</p>

            <div className="line small"></div>

          </div>
        </div>

      </div>
<div className="d">
        <ReviewSection />
        <GoogleReviewsSection/>
       </div>
    </section>
  );
}