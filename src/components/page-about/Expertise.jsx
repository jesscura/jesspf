import React from 'react';

// Icon component with inline SVGs for achievements
function Icon({ type, className = "w-20 h-20", style = {} }) {
  const iconProps = {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className,
    style,
    role: "img"
  };

  const icons = {
    'check-circle': (
      <svg {...iconProps} title="Achievement completed">
        <path d="M12 0c-6.627 0-12 5.373-12 12 0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.858-7.5 7.642z"/>
      </svg>
    ),
    'inbox': (
      <svg {...iconProps} title="Inbox management">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 6H10l-2 2H5V7h14v4h-3l-2-2z"/>
      </svg>
    ),
    'bolt': (
      <svg {...iconProps} title="Fast automation">
        <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
      </svg>
    ),
    'clock-check': (
      <svg {...iconProps} title="SLA compliance">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    'chat': (
      <svg {...iconProps} title="Communication improvement">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
      </svg>
    )
  };

  return icons[type] || null;
}

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
              <ul className="rest fz-16 opacity-8 two-columns mt-10" style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li className="d-flex align-items-start mb-2">
                  <Icon type="check-circle" className="mr-2 mt-1" style={{ minWidth: '20px', color: 'currentColor' }} />
                  <span>Helpdesk built from zero → full documentation; CSAT +15% in 90 days.</span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <Icon type="inbox" className="mr-2 mt-1" style={{ minWidth: '20px', color: 'currentColor' }} />
                  <span>Ticket backlog cleared and stabilized with WIP limits and macros.</span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <Icon type="bolt" className="mr-2 mt-1" style={{ minWidth: '20px', color: 'currentColor' }} />
                  <span>Macros/auto‑replies saved ~15 staff‑hours/week.</span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <Icon type="clock-check" className="mr-2 mt-1" style={{ minWidth: '20px', color: 'currentColor' }} />
                  <span>Maintenance SLA met 95%+ for 3 consecutive months.</span>
                </li>
                <li className="d-flex align-items-start">
                  <Icon type="chat" className="mr-2 mt-1" style={{ minWidth: '20px', color: 'currentColor' }} />
                  <span>Tenant satisfaction up via standardized communications.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
