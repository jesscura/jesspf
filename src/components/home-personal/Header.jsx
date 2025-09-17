'use client';
import React, { useEffect } from 'react';

import loadBackgroudImages from '../../common/loadBackgroudImages';
function Header() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <header
      className=" header-personal valign bg-img"
      data-background="/assets/imgs/profile/jesel-headshot-park.jpeg, /assets/imgs/profile/jesel-vibe-coffee-sip.jpeg, /assets/imgs/profile/jesel-vibe-coffee-look.jpeg, /assets/imgs/profile/IMG_1983.jpeg, /assets/imgs/profile/IMG_9556.jpeg, /assets/imgs/profile/IMG_9564.jpeg, /assets/imgs/profile/jesel.jpg, /assets/imgs/background/bg4.jpg"
      data-overlay-dark="4"
    >
      <div className="container ontop">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="mb-15">
                <span className="icon-img-30 mr-10">
                  <img src="/assets/imgs/header/hi.png" alt="Waving hand icon" />
                </span>{' '}
                Hello there!
              </h6>
              <h1 className="fw-700 mb-10">
                I&apos;m Jesel <span className="main-color">Cura</span>
              </h1>
              <h3>Customer Success • E‑commerce Ops • Property Management</h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      I help SaaS, e‑commerce, and real estate teams improve CSAT, streamline operations, and scale with automation and SOPs.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <a
                      href="/page-contact"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Contact Me</span>
                    </a>
                    <div className="icon-img-60 ml-20">
                      <img src="/assets/imgs/icon-img/arrow-down-big.png" alt="Arrow pointing down" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right-side hero photo */}
          <div className="col-lg-5 mt-40 mt-lg-0">
            <div className="w-100 d-flex justify-content-lg-end justify-content-start">
              <img
                src="/assets/imgs/profile/jesel-headshot-park.jpeg"
                alt="Portrait of Jesel Cura"
                onError={(e) => {
                  const tried = e.currentTarget.dataset.fallback || '0';
                  if (tried === '0') {
                    e.currentTarget.dataset.fallback = '1';
                    e.currentTarget.src = '/assets/imgs/profile/jesel-vibe-coffee-sip.jpeg';
                  } else if (tried === '1') {
                    e.currentTarget.dataset.fallback = '2';
                    e.currentTarget.src = '/assets/imgs/profile/jesel-vibe-coffee-look.jpeg';
                  } else if (tried === '2') {
                    e.currentTarget.dataset.fallback = '3';
                    e.currentTarget.src = '/assets/imgs/profile/IMG_1983.jpeg';
                  } else if (tried === '3') {
                    e.currentTarget.dataset.fallback = '4';
                    e.currentTarget.src = '/assets/imgs/profile/IMG_9556.jpeg';
                  } else if (tried === '4') {
                    e.currentTarget.dataset.fallback = '5';
                    e.currentTarget.src = '/assets/imgs/profile/IMG_9564.jpeg';
                  } else {
                    e.currentTarget.style.display = 'none';
                  }
                }}
                style={{
                  width: '100%',
                  maxWidth: 460,
                  height: 'auto',
                  borderRadius: 16,
                  objectFit: 'cover',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.18)'
                }}
              />
            </div>
          </div>
        </div>
        <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email:</h6>
            <span className="p-color">hello@jesscura.com</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Phone:</h6>
            <span className="p-color">+1 214-945-2234</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Address:</h6>
            <span className="p-color">Manila, PH</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
