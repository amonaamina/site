import React from 'react';
import './SocialVideoSection.css';

import v1 from "../Vidios/VID-20260502-WA0014.mp4";
import v2 from "../Vidios/VID-20260502-WA0011.mp4";
import v3 from "../Vidios/VID-20260503-WA0001.mp4";
import v4 from "../Vidios/VID-20260503-WA0003.mp4";

import instagram from "../img/instagram.png";
import youtube from "../img/youtube.png";

const videos = {
  instagram: [v4, v2, v3],
  youtube: [
    'https://www.youtube.com/embed/Vmp9W_pE8R8',
    'https://www.youtube.com/embed/K1nuEvYLH0c',
    'https://www.youtube.com/embed/bNv5BVzixWE',
  ],
};

function VideoCard({ src, isYoutube }) {
  return (
    <div className="video-card">
      {isYoutube ? (
        <iframe
          className="video-frame"
          src={src}
          title="YouTube video"
          allowFullScreen
        />
      ) : (
        <video className="video-frame" controls playsInline>
          <source src={src} type="video/mp4" />
          Dein Browser unterstützt dieses Video nicht.
        </video>
      )}
    </div>
  );
}

function PlatformSection({ title, icon, videos, isYoutube, linkText, linkUrl }) {
  return (
    <div className="platform-block">
      <div className="platform-header">
        <div className="t">
          <img src={icon} alt={title} />
          <h3>{title}</h3>
        </div>
      </div>

      <div className="video-grid">
        {videos.map((src, index) => (
          <VideoCard key={index} src={src} isYoutube={isYoutube} />
        ))}
      </div>

      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="platform-link"
      >
        {linkText}
      </a>
    </div>
  );
}

export default function SocialMediaVideoSection() {
  return (
    <section className="social-media-section">
      <div className="container">
        <header className="section-header">
          <h2>Wir sind Wintergartenmeister – das machen wir für Sie</h2>
          <p>Echte Einblicke in unsere Arbeit auf Instagram und YouTube.</p>
        </header>

        <PlatformSection
          title="YouTube"
          icon={youtube}
          videos={videos.youtube}
          isYoutube={true}
          linkText="Zu unserem YouTube-Kanal"
          linkUrl="https://youtube.com/shorts/Vmp9W_pE8R8?is=Ql591E4aw9tHj7EA"
        />

        <PlatformSection
          title="Instagram"
          icon={instagram}
          videos={videos.instagram}
          isYoutube={false}
          linkText="Zu unserem Instagram-Kanal"
          linkUrl="https://www.instagram.com/wintergartenmeister/?utm_source=ig_web_button_share_sheet"
        />
      </div>
    </section>
  );
}
