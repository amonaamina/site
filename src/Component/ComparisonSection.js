// import React from 'react';
// import './ComparisonSection.css';


// export default function ComparisonSection() {
//   const advantages = [
//     {
//       icon: <i class="fa-solid fa-truck"></i>,
//       title: 'Schnelle Gratis Montage/Versand',
//       text: 'Ohne zusätzliche Kosten',
//     },
//     {
//       icon: <i class="fa-solid fa-shield"></i>,
//       title: 'Qualität Made in Germany',
//       text: 'Hochwertige Materialien',
//     },
//     {
//       icon: <i class="fa-brands fa-rocketchat"></i>,
//       title: 'Gratis Beratung & Aufmaß',
//       text: 'Persönlich & unverbindlich',
//     },
//     {
//       icon: <i class="fa-solid fa-award"></i>,
//       title: '2 Jahre Garantie',
//       text: 'Sicherheit, auf die Sie sich verlassen können',
//     },
//     {
//       icon: <i class="fa-solid fa-wrench"></i>,
//       title: 'Profi Montage',
//       text: 'Fachgerecht & zuverlässig',
//     },
//   ];

//   const disadvantages = [
//     {
//       icon: <i class="fa-solid fa-x"></i>,
//       title: 'Langes Warten nötig',
//       text: 'Oft unklare Lieferzeiten',
//     },
//     {
//       icon: <i class="fa-solid fa-x"></i>,
//       title: 'Schlechtere Materialien',
//       text: 'Geringere Qualität',
//     },
//     {
//       icon: <i class="fa-solid fa-x"></i>,
//       title: 'Aufmaß kostenpflichtig',
//       text: 'Zusätzliche Kosten',
//     },
//     {
//       icon: <i class="fa-solid fa-x"></i>,
//       title: 'Keine Garantie',
//       text: 'Kein Schutz bei Problemen',
//     },
//     {
//       icon: <i class="fa-solid fa-x"></i>,
//       title: 'Unzureichende Montage',
//       text: 'Risiko von Nacharbeiten',
//     },
//   ];

//   return (
//     <section className="comparison-section">
//       <div className="container">
//         <span className="eyebrow">WARUM BEI ALU System?</span>
//         <h2>Der Unterschied, der zählt.</h2>
//         <p className="subtitle">
//           Qualität, Service und Zuverlässigkeit – ohne Kompromisse.
//         </p>

//         <div className="comparison-grid">
//           <div className="comparison-card primary">
//             <div className="card-header">
//               <i class="fa-solid fa-circle-check checkcheck "></i>
//               <h3>Alu System</h3>
//             </div>
//             <div className="card-content">
//               {advantages.map((item, index) => (
//                 <div className="feature-item" key={index}>
//                   <div className="feature-icon">{item.icon}</div>
//                   <div>
//                     <h4>{item.title}</h4>
//                     <p>{item.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="vs-badge">VS</div>

//           <div className="comparison-card secondary">
//             <div className="card-header">
//              <i class="fa-solid fa-x xicon"></i>
//               <h3>Andere Anbieter</h3>
//             </div>
//             <div className="card-content">
//               {disadvantages.map((item, index) => (
//                 <div className="feature-item negative" key={index}>
//                   <div className="feature-icon">{item.icon}</div>
//                   <div>
//                     <h4>{item.title}</h4>
//                     <p>{item.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="benefit-bar">
//           <span>✓ Sicher & zuverlässig</span>
//           <span>✓ Schnell & unkompliziert</span>
//           <span>✓ Made in Germany</span>
//         </div>

//         <button className="cta-button">
//           Jetzt gratis beraten lassen
//         </button>
//       </div>
//     </section>
//   );
// }

import React from "react";
import "./ComparisonSection.css";
import hakchen from "../img/hakchen.png"
import schaltflache_loschen from "../img/schaltflache-loschen.png"

export default function ComparisonSection() {
  return (
    <div className="warum-container">
      <h2>Warum bei Wintergartenmeister?</h2>

      <div className="vergleich-wrapper">
        {/* Alu Schmidt */}
        <div className="vergleich-box alu">
          <div className="vergleich-header alu-header">Wintergartenmeister</div>
          <div className="battery full"></div>
          <ul>
            <li><img src={hakchen} /> Schnelle Gratis Montage/Versand</li>
            <li><img src={hakchen} /> Qualität Made in Germany</li>
            <li><img src={hakchen} /> Gratis Beratung & Aufmaß</li>
            <li><img src={hakchen} /> 2 Jahre Garantie</li>
            <li><img src={hakchen} /> Profi Montage</li>
          </ul>
        </div>

        {/* Andere Anbieter */}
        <div className="vergleich-box andere">
          <div className="vergleich-header andere-header">Andere Anbieter</div>
          <div className="battery half"></div>
          <ul>
            <li><img src={schaltflache_loschen} /> Langes Warten nötig</li>
            <li><img src={schaltflache_loschen} /> Schlechtere Materialien</li>
            <li><img src={schaltflache_loschen} /> Aufmaß kostenpflichtig</li>
            <li><img src={schaltflache_loschen} /> Keine Garantie</li>
            <li><img src={schaltflache_loschen} /> Unzureichende Montage</li>
          </ul>
        </div>
      </div>

      <button className="cta-button">JETZT GRATIS BERATEN LASSEN</button>
    </div>
  );
}
