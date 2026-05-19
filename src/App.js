
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Component/Header";
import Footer from "./Component/Footer";

import Home from "./Component/Home";
import Features from "./Component/Features";
import ProductSection from "./Component/ProductSection";
import ComparisonSection from "./Component/ComparisonSection";
import ProductSectionExplore from "./Component/ProductSectionExplore";
import RatgeberSection from "./Component/RatgeberSection";
import Faq from "./Component/Faq";
import LocationSection from "./Component/LocationSection";
import ReviewSection from "./Component/ReviewSection";
import GoogleReviewsSection from "./Component/GoogleReviewsSection";
import Whatsapp from "../src/img/whatsapp.png";

import "./App.css";
import Datenschutzerklärung from "./Component/Datenschutzerklärung";
import Impressum from "./Component/Impressum";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Uberdachungen from "./Component/Uberdachungen";
import CarportPage from "./Component/CarportPage";
import WintergartenExtended from "./Component/WintergartenExtended";
import Willkommen from "./Component/Willkommen";
import AGB from "./Component/AGB";
import Widerruf from "./Component/Widerruf";
import Vordachs from "./Component/Vordachs";
import Vordach from "./Component/Vordach";
import Glande from "./Component/Glande";
import Carpots from "./Component/Carpots";
import Galänders from "./Component/Galänders";
import Terrassenueberdachung from "./Component/Terrassenüberdachung";
import Markisen from "./Component/Markisen";
import Markise from "./Component/Markise";
import Lamellendachs from "./Component/Lamellendachs";
import Lamellendach from "./Component/Lamellendach";
import SolarTerrassenüberdachungen from "./Component/SolarTerrassenüberdachungen";
import SolarTerrassenüberdachung from "./Component/SolarTerrassenüberdachung";
import Glasschiebeelementen from "./Component/Glasschiebeelementen";
import Glasschiebeelemente from "./Component/Glasschiebeelemente";
import Zauns from "./Component/Zauns";
import Zaun from "./Component/Zaun";
import KostenloseBeratung from "./Component/KostenloseBeratung";
import TerrassenüberdachungAusPVSGGlas from "./Component/TerrassenüberdachungAusPVSGGlas";

const website = "https://wintergartenmeister.de/";

const whatsappLink = `https://wa.me/491747086562?text=${encodeURIComponent(website)}`;
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <Router>
        <ScrollToTop />

      <div className="App">

        {/* FIX HEADER */}
        <Header />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/terrasenübertachung" element={<Uberdachungen />} />
          <Route path="/übertachung" element={<Terrassenueberdachung />} />
          <Route path="/product" element={<ProductSection />} />
          <Route path="/vergleich" element={<ComparisonSection />} />
          <Route path="/explore" element={<ProductSectionExplore />} />
          <Route path="/ratgeber" element={<RatgeberSection />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/standorte" element={<LocationSection />} />
          <Route path="/bewertungen" element={<ReviewSection />} />
          <Route path="/google-reviews" element={<GoogleReviewsSection />} />
          <Route path="/datenschutz" element={<Datenschutzerklärung />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/carport" element={<CarportPage />} />
          <Route path="/WintergartenExtended" element={<WintergartenExtended />} />
          <Route path="/ueber-uns" element={<Willkommen />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/widerrufsrecht" element={<Widerruf />} />
          <Route path="/vordachs" element={<Vordachs />} />
          <Route path="/vordach" element={<Vordach />} />
          <Route path="/vordachs" element={<Vordach />} />
          <Route path="/carports" element={<Carpots />} />
          <Route path="/galänder" element={<Glande />} />
          <Route path="/geländers" element={<Galänders />} />
          <Route path="/markisen" element={<Markisen />} />
          <Route path="/markise" element={<Markise />} />
          <Route path="/lamellendachs" element={<Lamellendachs />} />
          <Route path="/lamellendach" element={<Lamellendach />} />
          <Route path="/solarTerrassenüberdachungen" element={<SolarTerrassenüberdachungen />} />
          <Route path="/solarTerrassenüberdachung" element={<SolarTerrassenüberdachung />} />
          <Route path="/glasschiebeelementen" element={<Glasschiebeelementen />} />
          <Route path="/glasschiebeelemente" element={<Glasschiebeelemente />} />
          <Route path="/zauns" element={<Zauns />} />
          <Route path="/zaun" element={<Zaun />} />
          <Route path="/beratung" element={<KostenloseBeratung />} />
          <Route path="/übertachungAusPVSGGlas" element={<TerrassenüberdachungAusPVSGGlas />} />

          
        </Routes>

        {/* FIX FOOTER */}
        <button className="whatsapp">
          <a href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button">
  <img  src={Whatsapp} alt="Beschreibung"/>
          </a>
      
       </button>
        <Footer/>

      </div>
    </Router>
  );
}

export default App;
