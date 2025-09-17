import React from 'react';

const photos = [
  '/assets/imgs/profile/jesel-headshot-park.jpg',
  '/assets/imgs/profile/jesel-vibe-coffee-sip.jpg',
  '/assets/imgs/profile/jesel-vibe-coffee-look.jpg',
  '/assets/imgs/profile/IMG_1983.jpeg',
  '/assets/imgs/profile/IMG_9556.jpeg',
  '/assets/imgs/profile/IMG_9564.jpeg',
];

function PhotoItem({ src, alt }) {
  const handleError = (e) => {
    // Hide the img if it can't load (e.g., not deployed yet)
    e.currentTarget.style.display = 'none';
  };
  return (
    <div className="col-lg-4 col-md-6 mb-30">
      <div className="item radius-10 overflow-hidden shadow">
        <img
          src={src}
          alt={alt}
          onError={handleError}
          style={{ width: '100%', height: 360, objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}

export default function Photos() {
  return (
    <section className="section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center mb-40">
          <div className="col-lg-8 text-center">
            <h3 className="mb-10">A few snapshots</h3>
            <p className="p-color">A little more outside the resume.</p>
          </div>
        </div>
        <div className="row md-marg">
          {photos.map((src, i) => (
            <PhotoItem key={i} src={src} alt={`Jesel photo ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
