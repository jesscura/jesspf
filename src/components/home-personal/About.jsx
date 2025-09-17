import React from 'react';

function About() {
  return (
    <section className="about-author section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <img
                  src="/assets/imgs/profile/jesel.jpg"
                  alt="Portrait of Jesel Cura"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/assets/imgs/profile/placeholder.svg';
                  }}
                />
              </div>
              <span className="icon">
                <img src="/assets/imgs/resume/icon1.png" alt="Tool icon" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon2.png" alt="Tool icon" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon3.png" alt="Tool icon" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon4.png" alt="Tool icon" />
              </span>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">About Me</h6>
              <div className="text">
                <h4 className="mb-30">
                  I’m <span className="fw-200">an Operations & Customer Success specialist</span> helping SaaS, e‑commerce, and real‑estate teams improve retention, streamline workflows, and scale with automation.
                </h4>
                <p>
                  I build processes, SOPs, and support frameworks that reduce resolution time, improve CSAT, and keep clients engaged. I’ve worked across tools like Zendesk, Gorgias, Intercom, Shopify, WooCommerce, AppFolio, and Buildium.
                </p>

                <div className="numbers mt-50">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">100%</h3>
                          <h6 className="p-color sub-title">Upwork Job Success</h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <img src="/assets/imgs/arw0.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">50+</h3>
                          <h6 className="p-color sub-title">Properties Managed</h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <img src="/assets/imgs/arw0.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
