import React from 'react';

export default function MiniHeroCTA() {
  return (
    <section className="section-padding pt-40 pb-40 bg-gray">
      <div className="container">
        <div className="row align-items-center g-30">
          <div className="col-lg-9">
            <h3 className="fw-600 mb-10">I help teams ship great customer experiences.</h3>
            <p className="opacity-8 mb-0 fz-18">
              From standing up helpdesks and SOPs to optimizing Shopify and property ops, I turn messy workflows
              into measurable outcomes. If you’re scaling support, operations, or retention—I can help.
            </p>
          </div>
          <div className="col-lg-3 text-lg-end mt-20 mt-lg-0">
            <a href="/page-contact" className="butn butn-md butn-bg main-colorbg radius-5">
              <span className="text">Let&apos;s Connect</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
