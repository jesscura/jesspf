import React from 'react';

export default function Expertise() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="sec-head text-center mb-60">
              <h3 className="fw-600">Expertise & Achievements</h3>
              <p className="opacity-7 mt-10">A quick snapshot of how I help teams level up.</p>
            </div>
          </div>
        </div>
        <div className="row g-30">
          <div className="col-lg-4 col-md-6">
            <div className="item sub-bg radius-10 p-30 h-100">
              <h6 className="mb-15">Customer Success & Support Ops</h6>
              <ul className="rest fz-16 opacity-8">
                <li>Cut first‑response time by 40% via macros, SLAs, and routing in Zendesk/Gorgias/Intercom.</li>
                <li>Built CSAT/NPS dashboards; improved CSAT to 4.7+/5 within a quarter.</li>
                <li>Authored SOPs and QA rubrics; onboarded and trained multi‑time‑zone teams.</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item sub-bg radius-10 p-30 h-100">
              <h6 className="mb-15">E‑commerce Operations</h6>
              <ul className="rest fz-16 opacity-8">
                <li>Streamlined Shopify + Gorgias workflows; reduced manual touches by 60%.</li>
                <li>Set up returns/exchanges and order‑status automation; clearer comms, fewer tickets.</li>
                <li>Retention lift from proactive LTV/cohort tracking and tailored outreach.</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item sub-bg radius-10 p-30 h-100">
              <h6 className="mb-15">Property Management Ops</h6>
              <ul className="rest fz-16 opacity-8">
                <li>Standardized maintenance triage and vendor SLAs in AppFolio/Buildium.</li>
                <li>Faster unit turns with checklisted make‑ready; resident comms consistency.</li>
                <li>Created reporting cadence for occupancy, collections, and work orders.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-60">
          <div className="col-lg-12">
            <div className="sub-bg radius-10 p-30">
              <h6 className="mb-15">Selected outcomes</h6>
              <ul className="rest fz-16 opacity-8 two-columns">
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
