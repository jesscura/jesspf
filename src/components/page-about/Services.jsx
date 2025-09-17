import React from 'react';
import data from '../../data/services';

function Services() {
  return (
    <section className="services-inline2 section-padding sub-bg bord-bottom-grd bord-top-grd">
      <div className="container ontop">
        <div className="sec-head mb-60 d-flex align-items-center">
          <div>
            <span className="sub-title main-color mb-5">What I Do</span>
            <h3 className="fw-600 fz-40 text-u">Featured Services</h3>
          </div>
          <div className="ml-auto vi-more">
            <a href="/page-services" className="butn butn-sm butn-bord radius-30">
              <span>View All</span>
            </a>
          </div>
        </div>

        <div className="row md-marg">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4 md-mb40">
              <div className="p-30 radius-10 bg-gray h-100">
                <div className="d-flex align-items-center mb-15">
                  <div className="icon-img-40 mr-10">
                    <img src={item.img} alt="" />
                  </div>
                  <h5 className="mb-0">{item.title}</h5>
                </div>
                <ul className="rest list-dot small">
                  {item.bullets.slice(0, 5).map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-40">
          <a href="/page-contact" className="underline main-color">
            <span>
              Not seeing a specific task? Let’s chat.
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
