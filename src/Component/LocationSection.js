// LocationSection.jsx
import React from "react";
import "./LocationSection.css";

export default function LocationSection() {
  return (
    <section className="location">
      <div className="location__content">
        
        {/* TEXT */}
        <div className="location__text">
          <h2 className="ti">Unser Standort in Düsseldorf</h2>

          <div className="p">
            <p>
            Vertrauen auf echte Nähe und persönliche Beratung. In Düsseldorf –
            zentral gelegen – findest du uns nicht nur online, sondern auch vor Ort. Komm vorbei, schau dir unsere Materialien an und überzeuge dich selbst von unserer Qualität und Erfahrung.
          </p>

          <p>Robert-Stolz-Str. 23<br />
            40470 Düsseldorf
          </p>

          <p>Wir freuen uns auf Sie!</p>
          </div>
        </div>

        {/* MAP */}
        <div className="location__map">
          <iframe
            title="Google Map Düsseldorf"
            src="https://www.google.com/maps?q=Robert-Stolz-Str.+23,+40470+Düsseldorf&output=embed"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}