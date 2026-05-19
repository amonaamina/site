import React from 'react';
import './ReviewSection.css';

const StarRating = ({ rating, size = 20 }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3 && rating % 1 <= 0.7;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <span className="star-rating" aria-label={`${rating} von 5 Sternen`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <svg key={`full-${i}`} width={size} height={size} viewBox="0 0 24 24" fill="#FBBF24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
      {hasHalf && (
        <svg width={size} height={size} viewBox="0 0 24 24" className="half-star">
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path fill="url(#halfGrad)" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <svg key={`empty-${i}`} width={size} height={size} viewBox="0 0 24 24" fill="#D1D5DB">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
};

const ReviewSection = () => {
  const rating = 4.7;
  const reviewCount = 17541;
  const formattedCount = reviewCount.toLocaleString('de-DE');

  // const handleReviewClick = () => {
  //   window.open(
  //     'https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID',
  //     '_blank',
  //     'noopener,noreferrer'
  //   );
  // };

  return (
    <section className="review-section" aria-labelledby="review-heading">
      <h2 id="review-heading" className="review-heading">
          Was unsere Kunden sagen
        </h2>
      <div className="review-card1">
        

        <div className="review-content">
          <div className="review-info">
            <div className="google-brand">
              <svg className="google-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="google-label">Google Reviews</span>
            </div>

            <div className="rating-block">
              <span className="rating-number">{rating}</span>
              <StarRating rating={rating} size={22} />
              <span className="review-count">({formattedCount})</span>
            </div>
          </div>
<a href='https://maps.app.goo.gl/hMBBJzRSA1x5dnGb6'>
          <button
            className="review-btn"
            aria-label="Bewertung auf Google hinterlassen"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
            Review us on Google
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;