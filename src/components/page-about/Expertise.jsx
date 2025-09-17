import React from 'react';

export default function Expertise() {
  return (
  <section className="pt-0 pb-40 position-re" style={{ paddingTop: 0, paddingBottom: 40 }}>
      <img src="/assets/imgs/patterns/dots2.png" alt="" className="pattern top-0 start-0 opacity-2 d-none d-md-block" />
      <img src="/assets/imgs/patterns/patt.svg" alt="" className="pattern bottom-0 end-0 opacity-2 d-none d-md-block" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="sec-head text-center mb-30 wow fadeInUp" data-wow-delay=".1s">
              <h3 className="fw-600 mb-10">Expertise & Achievements</h3>
              <p className="opacity-7 mt-10">A quick snapshot of how I help teams level up.</p>
            </div>
          </div>
        </div>
        <div className="row g-30">
          <div className="col-lg-4 col-md-6">
            <div className="item sub-bg radius-10 p-30 h-100 wow fadeInUp" data-wow-delay=".1s">
              <div className="d-flex align-items-center mb-15">
                <span className="icon-img-40 mr-15"><img src="/assets/imgs/tools/zendesk.svg" alt="Zendesk icon" /></span>
                <h6 className="mb-0">Customer Success & Support Ops</h6>
              </div>
              <div className="d-flex align-items-center gap-10 opacity-7">
                <span className="icon-img-30 mr-10"><img src="/assets/imgs/tools/gorgias.svg" alt="Gorgias icon" /></span>
                <span className="icon-img-30 mr-10"><img src="/assets/imgs/tools/intercom.svg" alt="Intercom icon" /></span>
              </div>
              <ul className="rest fz-16 opacity-8 mt-10">
                <li>Cut first‑response time by 40% via macros, SLAs, and routing in Zendesk/Gorgias/Intercom.</li>
                <li>Built CSAT/NPS dashboards; improved CSAT to 4.7+/5 within a quarter.</li>
                <li>Authored SOPs and QA rubrics; onboarded and trained multi‑time‑zone teams.</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item sub-bg radius-10 p-30 h-100 wow fadeInUp" data-wow-delay=".2s">
              <div className="d-flex align-items-center mb-15">
                <span className="icon-img-40 mr-15"><img src="/assets/imgs/tools/shopify.svg" alt="Shopify icon" /></span>
                <h6 className="mb-0">E‑commerce Operations</h6>
              </div>
              <div className="d-flex align-items-center gap-10 opacity-7">
                <span className="icon-img-30 mr-10"><img src="/assets/imgs/tools/gorgias.svg" alt="Gorgias icon" /></span>
                <span className="icon-img-30 mr-10"><img src="/assets/imgs/tools/woocommerce.svg" alt="WooCommerce icon" /></span>
              </div>
              <ul className="rest fz-16 opacity-8 mt-10">
                <li>Streamlined Shopify + Gorgias workflows; reduced manual touches by 60%.</li>
                <li>Set up returns/exchanges and order‑status automation; clearer comms, fewer tickets.</li>
                <li>Retention lift from proactive LTV/cohort tracking and tailored outreach.</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item sub-bg radius-10 p-30 h-100 wow fadeInUp" data-wow-delay=".3s">
              <div className="d-flex align-items-center mb-15">
                <span className="icon-img-40 mr-15"><img src="/assets/imgs/tools/appfolio.svg" alt="AppFolio icon" /></span>
                <h6 className="mb-0">Property Management Ops</h6>
              </div>
              <div className="d-flex align-items-center gap-10 opacity-7">
                {/* Add Buildium when available */}
              </div>
              <ul className="rest fz-16 opacity-8 mt-10">
                <li>Standardized maintenance triage and vendor SLAs in AppFolio/Buildium.</li>
                <li>Faster unit turns with checklisted make‑ready; resident comms consistency.</li>
                <li>Created reporting cadence for occupancy, collections, and work orders.</li>
              </ul>
            </div>
          </div>
        </div>
  <div className="row mt-40">
          <div className="col-lg-12">
            <div className="sub-bg radius-10 p-30 wow fadeInUp" data-wow-delay=".15s">
              <div className="d-flex align-items-center mb-15">
                <span className="icon-img-40 mr-15"><img src="/assets/imgs/star.png" alt="Star icon" /></span>
                <h6 className="mb-0">Selected outcomes</h6>
              </div>
              <ul className="rest fz-16 opacity-8 two-columns mt-10">
                <li>Helpdesk built from zero → full documentation; CSAT +15% in 90 days.</li>
                <li>Ticket backlog cleared and stabilized with WIP limits and macros.</li>
                <li>Macros/auto‑replies saved ~15 staff‑hours/week.</li>
                <li>Maintenance SLA met 95%+ for 3 consecutive months.</li>
                <li>Tenant satisfaction up via standardized communications.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
