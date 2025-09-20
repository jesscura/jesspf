import React from 'react';
import { trustMetrics, impactHighlights } from '../../data/stats';

function TrustStrip() {
  return (
    <section className="trust-strip section-padding">
      <div className="container">
        {/* Key Metrics */}
        <div className="row justify-content-center mb-60">
          {impactHighlights.map((highlight, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-30">
              <div className="trust-metric text-center">
                <h3 className="fw-600 fz-40 main-color mb-10">{highlight.metric}</h3>
                <h6 className="fw-600 mb-10">{highlight.label}</h6>
                <p className="opacity-8 fz-14">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="row">
          <div className="col-lg-4 mb-30">
            <div className="trust-category">
              <h6 className="fw-600 mb-20 main-color">Certifications</h6>
              <ul className="list-unstyled">
                {trustMetrics.certifications.map((cert, index) => (
                  <li key={index} className="mb-10 opacity-8">
                    <i className="fas fa-check-circle main-color mr-10"></i>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="col-lg-4 mb-30">
            <div className="trust-category">
              <h6 className="fw-600 mb-20 main-color">Industries Served</h6>
              <ul className="list-unstyled">
                {trustMetrics.industries.map((industry, index) => (
                  <li key={index} className="mb-10 opacity-8">
                    <i className="fas fa-check-circle main-color mr-10"></i>
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="col-lg-4 mb-30">
            <div className="trust-category">
              <h6 className="fw-600 mb-20 main-color">Company Sizes</h6>
              <ul className="list-unstyled">
                {trustMetrics.companySize.map((size, index) => (
                  <li key={index} className="mb-10 opacity-8">
                    <i className="fas fa-check-circle main-color mr-10"></i>
                    {size}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustStrip;