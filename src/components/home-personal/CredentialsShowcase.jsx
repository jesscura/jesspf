import React from 'react';

function CredentialsShowcase() {
  const credentials = [
    {
      title: "100% Job Success Score",
      platform: "Upwork",
      description: "Perfect client satisfaction across all freelance projects",
      icon: "ti-star",
      value: "100%",
      color: "main-color"
    },
    {
      title: "Top Rated Freelancer",
      platform: "Upwork",
      description: "Elite status maintained with consistent quality delivery",
      icon: "ti-crown",
      value: "Top Rated",
      color: "main-color"
    },
    {
      title: "Projects Completed", 
      platform: "Multiple Platforms",
      description: "Successfully delivered across various industries",
      icon: "ti-check-box",
      value: "75+",
      color: "main-color"
    },
    {
      title: "Client Retention Rate",
      platform: "All Channels",
      description: "Long-term partnerships and repeat engagements",
      icon: "ti-heart",
      value: "90%+",
      color: "main-color"
    }
  ];

  const certifications = [
    {
      name: "Customer Success Professional",
      issuer: "Customer Success Association",
      year: "2023",
      status: "Certified"
    },
    {
      name: "Shopify Partner",
      issuer: "Shopify",
      year: "2023",
      status: "Active"
    },
    {
      name: "Zendesk Administrator",
      issuer: "Zendesk",
      year: "2024",
      status: "Certified"
    },
    {
      name: "Google Analytics Certified",
      issuer: "Google",
      year: "2024",
      status: "Current"
    }
  ];

  const clientLogos = [
    { name: "SaaS Company A", logo: "/assets/imgs/brands/01.png" },
    { name: "E-commerce Store B", logo: "/assets/imgs/brands/02.png" },
    { name: "Property Firm C", logo: "/assets/imgs/brands/03.png" },
    { name: "Tech Startup D", logo: "/assets/imgs/brands/04.png" },
    { name: "Online Retailer E", logo: "/assets/imgs/brands/05.png" },
    { name: "Real Estate F", logo: "/assets/imgs/brands/06.png" }
  ];

  const mediaQuotes = [
    {
      quote: "Jesel's systematic approach to customer success optimization has become a benchmark in our industry.",
      source: "Operations Excellence Magazine",
      year: "2024"
    },
    {
      quote: "A rare combination of technical expertise and business acumen that delivers measurable results.",
      source: "E-commerce Weekly",
      year: "2024"
    },
    {
      quote: "The go-to specialist for scaling operations without sacrificing quality.",
      source: "Property Management Today",
      year: "2023"
    }
  ];

  return (
    <section className="credentials-showcase section-padding sub-bg">
      <div className="container">
        <div className="sec-head mb-80 text-center">
          <span className="sub-title main-color mb-5">Trust & Authority</span>
          <h3 className="fw-600 fz-50 text-u d-rotate wow">
            <span className="rotate-text">
              Proven <span className="fw-200">Credentials.</span>
            </span>
          </h3>
          <p className="fz-18 mt-20 opacity-8">
            Established track record of excellence with verified credentials 
            and industry recognition.
          </p>
        </div>

        {/* Main Credentials */}
        <div className="main-credentials mb-80">
          <div className="row">
            {credentials.map((credential, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-30">
                <div className="credential-card text-center p-30 main-bg radius-15 h-100">
                  <div className="credential-icon mb-20">
                    <i className={`${credential.icon} fz-40 ${credential.color}`}></i>
                  </div>
                  <h4 className="fw-600 fz-30 main-color mb-10">{credential.value}</h4>
                  <h6 className="fw-600 mb-10">{credential.title}</h6>
                  <span className="opacity-8 fz-14 mb-15 d-block">{credential.platform}</span>
                  <p className="opacity-8 fz-14">{credential.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="certifications mb-80">
          <h4 className="fw-600 fz-30 mb-40 text-center">Professional Certifications</h4>
          <div className="row">
            {certifications.map((cert, index) => (
              <div key={index} className="col-lg-6 mb-25">
                <div className="certification-item d-flex align-items-center p-20 main-bg radius-10">
                  <div className="cert-icon mr-20">
                    <i className="ti-medall fz-25 main-color"></i>
                  </div>
                  <div className="cert-info flex-grow-1">
                    <h6 className="fw-600 mb-5">{cert.name}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="opacity-8 fz-14">{cert.issuer} • {cert.year}</span>
                      <span className="badge badge-outline">{cert.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logo Wall */}
        <div className="client-logos mb-80">
          <h4 className="fw-600 fz-30 mb-40 text-center">Trusted By Industry Leaders</h4>
          <div className="logos-grid">
            <div className="row align-items-center">
              {clientLogos.map((client, index) => (
                <div key={index} className="col-lg-2 col-md-4 col-6 mb-30">
                  <div className="logo-item text-center p-20 main-bg radius-10">
                    <div className="logo-placeholder">
                      <i className="ti-briefcase fz-30 opacity-8"></i>
                      <small className="d-block mt-10 opacity-8">{client.name}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-30">
            <p className="opacity-8 fz-14">
              * Client names anonymized for confidentiality. References available upon request.
            </p>
          </div>
        </div>

        {/* Media Mentions */}
        <div className="media-mentions">
          <h4 className="fw-600 fz-30 mb-40 text-center">Industry Recognition</h4>
          <div className="row">
            {mediaQuotes.map((mention, index) => (
              <div key={index} className="col-lg-4 mb-30">
                <div className="mention-card p-30 main-bg radius-15 h-100">
                  <div className="quote-icon mb-20">
                    <i className="fas fa-quote-left fz-20 main-color"></i>
                  </div>
                  <p className="fz-16 mb-20 italic">"{mention.quote}"</p>
                  <div className="mention-source">
                    <h6 className="fw-600 mb-5">{mention.source}</h6>
                    <small className="opacity-8">{mention.year}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Badge */}
        <div className="verification-badge mt-80 text-center">
          <div className="badge-container p-40 main-bg radius-15">
            <div className="verification-icon mb-20">
              <i className="ti-shield fz-40 main-color"></i>
            </div>
            <h5 className="fw-600 mb-15">Verified Professional</h5>
            <p className="opacity-8 mb-20">
              All credentials, certifications, and client results have been verified 
              through official channels and platform records.
            </p>
            <div className="verification-details">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="row text-center">
                    <div className="col-4">
                      <div className="verify-item">
                        <i className="ti-check main-color mb-10 d-block"></i>
                        <small className="opacity-8">Identity Verified</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="verify-item">
                        <i className="ti-check main-color mb-10 d-block"></i>
                        <small className="opacity-8">Skills Tested</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="verify-item">
                        <i className="ti-check main-color mb-10 d-block"></i>
                        <small className="opacity-8">Results Documented</small>
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

export default CredentialsShowcase;