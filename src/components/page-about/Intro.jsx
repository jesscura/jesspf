import React from 'react';

function Intro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="img md-mb80 d-flex justify-content-center">
              <img
                src="/assets/imgs/profile/jesel.jpg"
                alt="Portrait of Jesel Cura"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/assets/imgs/profile/placeholder.svg';
                }}
                style={{
                  width: '100%',
                  maxWidth: 480,
                  borderRadius: 16,
                  objectFit: 'cover',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                  border: '6px solid var(--maincolor, #FFBE4B)',
                }}
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h3 className="mb-30">
                Operations & Customer Success <span className="fw-200">specialist</span>{' '}
                driving retention, operational efficiency, and scalable systems for SaaS,
                e‑commerce, and real‑estate teams.
              </h3>
              <p>
                I build processes, SOPs, and support frameworks that reduce resolution times,
                improve CSAT, and keep clients engaged. With 10+ years of experience across
                Customer Success, e‑commerce operations, and property operations, I help businesses
                move from reactive to proactive.
              </p>
              <a href="/page-services" className="underline main-color mt-40">
                <span className="text">
                  Our Services <i className="ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
