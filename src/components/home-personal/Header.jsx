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
      data-background="/assets/imgs/profile/IMG_1983.jpeg, /assets/imgs/profile/IMG_9556.jpeg, /assets/imgs/profile/IMG_9564.jpeg, /assets/imgs/profile/jesel.jpg, /assets/imgs/background/bg4.jpg"
      data-overlay-dark="4"
    >
      <div className="container ontop">
        <div className="row">
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
                  {/* Profile avatar */}
                  <div className="d-flex align-items-center mt-30">
                    <img
                      src="/assets/imgs/profile/jesel.jpg"
                      alt="Portrait of Jesel Cura"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/assets/imgs/profile/placeholder.svg';
                      }}
                      style={{
                        width: 140,
                        height: 140,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                        border: '4px solid var(--maincolor, #FFBE4B)',
                      }}
                    />
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
