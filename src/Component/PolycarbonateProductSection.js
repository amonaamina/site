
// ProductSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./PolycarbonateProductSection.css";
import technologie from "../img/technologie.png"
import farben from "../img/farben.png"
import favoriten from "../img/favoriten.png"
import GoogleReviewsSection from "./GoogleReviewsSection";
import ReviewSection from "./ReviewSection";
import vorteile from "../img/vorteile.png"
import kommunikation from "../img/kommunikation (2).png"
import reparatur from "../img/schlussel.png"
import schild from "../img/schild (1).png"
import schnelle_lieferung from "../img/schnelle-lieferung (1).png"
import RecommendedProducts from "./RecommendedProducts";


export default function PolycarbonateProductSection() {
   const imagess = [
  "https://aluschmidt.de/cdn/shop/files/Alu_Premium_Terrassen_berdachung_2048x2048.jpg?v=1770304774",
  "https://aluschmidt.de/cdn/shop/files/Alu_Premium_Terrassen_berdachung_2048x2048.jpg?v=1770304774",
  "https://aluschmidt.de/cdn/shop/files/Alu_Premium_Terrassen_berdachung_2048x2048.jpg?v=1770304774",
  "https://aluschmidt.de/cdn/shop/files/Alu_Premium_Terrassen_berdachung_2048x2048.jpg?v=1770304774",
  "https://aluschmidt.de/cdn/shop/files/Alu_Premium_Terrassen_berdachung_2048x2048.jpg?v=1770304774",
];
const itemss = [
  {
    title: "PERSÖNLICHE BERATUNG & AUFMASSSERVICE",
    text: "Individuelle Beratung und exaktes Aufmaß vor Ort.",
    img: kommunikation,
  },
  
  {
    title: "LIEFERUNG UND PROFESSIONELLE MONTAGE",
    text: "Zuverlässige Lieferung und fachgerechte Montage.",
    img: schnelle_lieferung,
  },
  {
    title: "WARTUNG UND NACHRÜSTSERVICE",
    text: "Service, Wartung und Erweiterungen jederzeit möglich.",
    img: reparatur,
  },
  {
    title: "GARANTIE UND QUALITÄTSVERSPRECHEN",
    text: "Geprüfte Qualität mit langfristiger Garantie.",
    img: schild,
  },
];
  return (
    <div className="divp1 ">
      

      <div className=" product-container1">
           {/* LEFT: IMAGE SLIDER */}
           <div className="slider-section">
             <Swiper spaceBetween={10}>
               {imagess.map((img, index) => (
                 <SwiperSlide key={index}>
                   <img src={img} alt="Terrasse" />
                 </SwiperSlide>
               ))}
             </Swiper>
     
             {/* Thumbnails */}
             <div className="thumbnails">
               {imagess.map((img, index) => (
                 <img key={index} src={img} alt="thumb" />
               ))}
             </div>
           </div>
     
           {/* RIGHT: PRODUCT INFO */}
           <div className="info-section info-section1">
             <div className="stars">★★★★★</div>
     
             <h2>Terrassenüberdachung aus Polycarbonat</h2>
     
             
     
             <p>
               <b>Eine Terrassenüberdachung aus Polycarbonat </b>  bietet eine moderne, langlebige und kostengünstige Lösung für den Schutz Ihrer Terrasse vor Witterungseinflüssen. Die Polycarbonatplatten sind besonders schlagfest, leicht und UV-beständig – ideal für jede Jahreszeit. Wenn Sie sich für ALUSYSTEM-NRW entscheiden, profitieren Sie von höchster Qualität, fachgerechter Montage und persönlicher Beratung. <b></b>.
             </p>
     
             <section className="product-containerSection">
            <div className="left">
            <img src={technologie} />
            </div>
            <div className="right">
                 <h3>Technische Eigenschaften</h3>
          <ul>
            <li> <i class="fa-solid fa-check"></i> 16 mm Stegplatten</li>
            <li><i class="fa-solid fa-check"></i> Klar / Opal / Bronze</li>
            <li><i class="fa-solid fa-check"></i> 45–82 % Lichtdurchlässigkeit</li>
            <li><i class="fa-solid fa-check"></i> UV-Schutz beidseitig</li>
            <li><i class="fa-solid fa-check"></i> B1 Brandschutzklasse</li>
          </ul>
            </div>
        </section>
       <section className="product-containerSection">
            <div className="left">
            <img src={farben} />
            </div>
            <div className="right">
          <h3>Individuelle Auswahlmöglichkeiten</h3>
          <ul>
            <li><i class="fa-solid fa-check"></i>Dachfarben: Weiß, Anthrazit, DB703</li>
            <li><i class="fa-solid fa-check"></i>Pultdach / Satteldach / Sonderformen</li>
            <li><i class="fa-solid fa-check"></i>Millimetergenaue Maßanfertigung</li>
          </ul>
          </div>
        </section>
        <section className="product-containerSection">
            <div className="left">
            <img src={favoriten} />
            </div>
            <div className="right">
          <h3>Optionales Zubehör</h3>
          <ul>
            <li><i class="fa-solid fa-check"></i>LED Spots</li>
            <li><i class="fa-solid fa-check"></i>Regenrinne integriert</li>
            <li><i class="fa-solid fa-check"></i>Heizstrahler</li>
            <li><i class="fa-solid fa-check"></i>Seitenwände / Windschutz</li>
            <li><i class="fa-solid fa-check"></i>Sonnenschutzsysteme</li>
          </ul>
            </div>

        </section>
         <section className="product-containerSection">
            <div className="left">
            <img src={vorteile} />
            </div>
            <div className="right">
  <h3>Vorteile im Überblick</h3>
  <ul>
    <li>Leichtes und äußerst bruchfestes Material</li>
    <li>UV-beständig mit hoher Lichtdurchlässigkeit</li>
    <li>Witterungs- und temperaturbeständig (-40°C bis +120°C)</li>
    <li>Günstiger als Glas bei gleichzeitig hoher Stabilität</li>
    <li>Ideal für moderne, lichtdurchflutete Überdachungen</li>
  </ul>
            </div>

</section>
     
             <div  className="rb"> 
                <button className="">JETZT ENTDECKEN</button>
             </div>
           </div>
      </div> 

         <div>
         

         </div>


<RecommendedProducts />
<div className="strip">
  {itemss.map((item, i) => (
    <div className="box" key={i}>
      <div className="icon">
        <img src={item.img} alt={item.title} />
      </div>

      <div className="content">
        <div className="title">{item.title}</div>
        <div className="text">{item.text}</div>
      </div>
    </div>
  ))}
</div>
      <div className="statment">
    <p className="mainSatz">Mit einer Polycarbonat-Terrassenüberdachung von ALUSYSTEM-NRW investieren Sie in Funktionalität, Design und Langlebigkeit. Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch – wir freuen uns auf Ihr Projekt!</p>
</div>

    <ReviewSection />
    <GoogleReviewsSection/>
    </div>
  );
}