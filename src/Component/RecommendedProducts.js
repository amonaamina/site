import { Link } from 'react-router-dom';
import './RecommendedProducts.css';

const products = [
  {
    id: 1,
    title: 'Premium Glasschiebeelemente für Terrassenüberdachung',    image: "https://aluschmidt.de/cdn/shop/files/Alu_Premium_Terrassen_berdachung_2048x2048.jpg?v=1770304774",
  },
  {
    id: 2,
    title: 'ALU SCHMIDT SunGuard Pro Aufdachmarkise',    image: "https://aluschmidt.de/cdn/shop/files/Alu_Premium_Terrassen_berdachung_2048x2048.jpg?v=1770304774",
  },
  {
    id: 3,
    title: '3 Meter Aluminium Pfosten',    image: "https://aluschmidt.de/cdn/shop/files/Alu_Premium_Terrassen_berdachung_2048x2048.jpg?v=1770304774",
  },
  {
    id: 4,
    title: '6 Meter Aluminium Pfosten',    image: "https://aluschmidt.de/cdn/shop/files/Alu_Premium_Terrassen_berdachung_2048x2048.jpg?v=1770304774",
  },
];

export default function RecommendedProducts() {
  return (
    <section className="recommended-products">
      <div className="recommended-container">
        <h2 className="recommended-title">Dir könnte auch gefallen</h2>

        <div className="products-grid">
          {products.map((product) => (
            <Link >
            <article key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
              </div>

              <div className="product-content">
                <h3 className="product-name">{product.title}</h3>

                
              </div>
            </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
