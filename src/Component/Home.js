
import Faq from "./Faq";
import Features from "./Features";
import GoogleReviewsSection from "./GoogleReviewsSection";
import "./Home.css";
import LocationSection from "./LocationSection";
import ProductSection from "./ProductSection";
import ProductSectionExplore from "./ProductSectionExplore";
import ReviewSection from "./ReviewSection";
import homppageImg from "../img/HompageIMg.png";
import SocialMediaVideoSection from "./SocialVideoSection";
import ServiceHighlights from "./ServiceHighlights";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Home() {
  return (
    <div>
    <section className="home-section">

      <div className="home-container">
        <>
      <Helmet>
        <title>Wintergartenmeister – Terrassenüberdachungen & Wintergärten</title>
        <meta
          name="description"
          content="Premium Terrassenüberdachungen, Wintergärten, Carports und Lamellendächer – Planung, Beratung und Montage in NRW & Umgebung."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* dein bisheriger Home‑Content */}
    </>
        <div className="home-text">
          <p className="top">Verlängere deinen Sommer draußen 🏡🗓️</p>
          <h1 className="home-title">
            Terrassenüberdachungen <br />
            & Wintergärten vom Profi
          </h1>

          <p className="home-description">
Mit deiner Wunschüberdachung, zum Selberbauen oder mit Montage.

          </p>

           <Link to="/beratung"><button className="home-button">Jetzt Gratis beraten <br />lassen</button></Link>
        </div>


      </div>
      <img src={homppageImg}  alt="Beschreibung"/>

    </section>
   
    <Features/>
    <SocialMediaVideoSection />
      <ProductSection/> 
       
    
      <LocationSection/>

      <ProductSectionExplore/>
      <Faq/>
      <ServiceHighlights/>
         <ReviewSection/>
         <GoogleReviewsSection/>
    </div>
  );
}
