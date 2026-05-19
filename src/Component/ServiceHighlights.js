import './ServiceHighlights.css';
import operator from '../img/operator.png';
import bezahlung from '../img/sichere-bezahlung.png';
import werkzeuge from '../img/werkzeuge.png';
import lieferung from '../img/lieferung.png';

export default function ServiceHighlights() {
  const services = [
    {
      icon: lieferung,
      title: 'Schneller Gratis Versand',
      subtitle: 'Lieferung in 1–2 Wochen',
    },
    {
      icon: werkzeuge,
      title: 'Fachgerechte Montage',
      subtitle: 'Montage vom Profi-Team',
    },
    {
      icon: bezahlung,
      title: 'Sicherer Checkout',
      subtitle: 'SSL Verschlüsselung',
    },
    {
      icon: operator,
      title: 'Persönliche Beratung',
      subtitle: 'Kostenlose Planung & Aufmaß',
    },
  ];

  return (
    <div className="service-highlights">
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            
              <img className="service-icon" src={service.icon} alt={service.title}  />
            
            <div className="service-content">
              <h3 className="service-title">
                {service.title}
              </h3>
              <p className="service-subtitle">
                {service.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
