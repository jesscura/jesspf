'use client';
import React from 'react';
import data from '../../data/services';

function Services() {
  return (
    <section className="services-modern section-padding">
      <div className="container">
        <div className="sec-head mb-60">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <h6 className="title-bord mb-15">Services I Offer</h6>
              <h4>
                Practical, outcomes‑driven support across customer success,
                property operations, and digital solutions.
              </h4>
            </div>
            <div className="col-lg-5 text-lg-right mt-20 mt-lg-0">
              <a href="/page-contact" className="butn butn-sm butn-bord radius-30">
                <span>Let’s Work Together</span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4 md-mb40">
              <div className="item p-30 radius-10 sub-bg h-100">
                <div className="d-flex align-items-center mb-20">
                  <div className="icon-img-50 mr-15">
                    <img src={item.img} alt="" />
                  </div>
                  <h5 className="mb-0">{item.title}</h5>
                </div>
                <ul className="rest list-arrow">
                  {item.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
