import React from 'react';

function DownloadableResources() {
  const resources = [
    {
      title: "Customer Success Optimization Checklist",
      description: "15-point checklist for improving CSAT scores and reducing support ticket volume",
      fileType: "PDF",
      size: "2.1 MB",
      downloadUrl: "/assets/downloads/customer-success-checklist.pdf",
      icon: "ti-check-box",
      category: "Customer Success"
    },
    {
      title: "E-commerce Operations Scaling Guide", 
      description: "Complete guide for handling 3x order volume growth without compromising quality",
      fileType: "PDF",
      size: "3.5 MB",
      downloadUrl: "/assets/downloads/ecommerce-scaling-guide.pdf",
      icon: "ti-shopping-cart",
      category: "E-commerce"
    },
    {
      title: "Property Management SOP Template",
      description: "Standard operating procedures template for managing 50+ properties efficiently",
      fileType: "DOCX",
      size: "1.8 MB", 
      downloadUrl: "/assets/downloads/property-management-sop.docx",
      icon: "ti-home",
      category: "Property Management"
    },
    {
      title: "Process Optimization Worksheet",
      description: "Step-by-step worksheet for identifying and eliminating operational bottlenecks",
      fileType: "PDF",
      size: "1.5 MB",
      downloadUrl: "/assets/downloads/process-optimization-worksheet.pdf",
      icon: "ti-settings",
      category: "Process Improvement"
    },
    {
      title: "100% Upwork Success Rate Playbook",
      description: "Proven strategies for maintaining perfect client satisfaction on freelance platforms",
      fileType: "PDF",
      size: "2.8 MB",
      downloadUrl: "/assets/downloads/upwork-success-playbook.pdf",
      icon: "ti-star",
      category: "Freelancing"
    },
    {
      title: "ROI Calculator for Operations Projects",
      description: "Excel template to calculate expected ROI from customer success and operations improvements",
      fileType: "XLSX",
      size: "890 KB",
      downloadUrl: "/assets/downloads/operations-roi-calculator.xlsx",
      icon: "ti-stats-up",
      category: "Business Analysis"
    }
  ];

  const handleDownload = (resource) => {
    // In a real implementation, this would track downloads and serve actual files
    // For now, we'll show an alert with instructions
    alert(`To download "${resource.title}", please contact me directly. This ensures you receive the most up-to-date version and allows me to provide personalized recommendations based on your specific needs.`);
  };

  return (
    <section className="downloadable-resources section-padding">
      <div className="container">
        <div className="sec-head mb-80 text-center">
          <span className="sub-title main-color mb-5">Free Resources</span>
          <h3 className="fw-600 fz-50 text-u d-rotate wow">
            <span className="rotate-text">
              Expert <span className="fw-200">Downloads.</span>
            </span>
          </h3>
          <p className="fz-18 mt-20 opacity-8">
            Battle-tested templates, checklists, and guides from successful 
            customer success, e-commerce, and property management projects.
          </p>
        </div>

        <div className="resources-grid">
          <div className="row">
            {resources.map((resource, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-40">
                <div className="resource-card main-bg p-30 radius-15 h-100">
                  <div className="resource-header mb-20">
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="resource-icon">
                        <i className={`${resource.icon} fz-30 main-color`}></i>
                      </div>
                      <div className="resource-meta">
                        <span className="badge badge-outline mb-10">{resource.category}</span>
                        <div className="file-info">
                          <small className="p-color">{resource.fileType} • {resource.size}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="resource-content">
                    <h5 className="fw-600 mb-15">{resource.title}</h5>
                    <p className="opacity-8 mb-25">{resource.description}</p>
                  </div>
                  
                  <div className="resource-action mt-auto">
                    <button 
                      onClick={() => handleDownload(resource)}
                      className="butn butn-sm butn-bord radius-30 w-100"
                    >
                      <span className="text">
                        <i className="ti-download mr-10"></i>
                        Download Free
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Value Proposition */}
        <div className="resources-value mt-80">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="cont">
                <h4 className="fw-600 fz-30 mb-20">
                  Why These Resources Work
                </h4>
                <p className="fz-16 mb-30 opacity-8">
                  Each template and guide has been refined through real client projects, 
                  ensuring they deliver practical, actionable results you can implement immediately.
                </p>
                <div className="value-points">
                  <div className="point mb-20">
                    <i className="ti-check main-color mr-15"></i>
                    <span>Based on 75+ successful project implementations</span>
                  </div>
                  <div className="point mb-20">
                    <i className="ti-check main-color mr-15"></i>
                    <span>Used by clients achieving 15%+ CSAT improvements</span>
                  </div>
                  <div className="point mb-20">
                    <i className="ti-check main-color mr-15"></i>
                    <span>Continuously updated with latest best practices</span>
                  </div>
                  <div className="point mb-20">
                    <i className="ti-check main-color mr-15"></i>
                    <span>Includes implementation guidance and tips</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="resources-stats">
                <div className="row text-center">
                  <div className="col-6 mb-30">
                    <div className="stat-item">
                      <h3 className="fw-600 fz-40 main-color">6</h3>
                      <span className="opacity-8">Expert Resources</span>
                    </div>
                  </div>
                  <div className="col-6 mb-30">
                    <div className="stat-item">
                      <h3 className="fw-600 fz-40 main-color">500+</h3>
                      <span className="opacity-8">Downloads</span>
                    </div>
                  </div>
                  <div className="col-6 mb-30">
                    <div className="stat-item">
                      <h3 className="fw-600 fz-40 main-color">100%</h3>
                      <span className="opacity-8">Free Access</span>
                    </div>
                  </div>
                  <div className="col-6 mb-30">
                    <div className="stat-item">
                      <h3 className="fw-600 fz-40 main-color">4.9/5</h3>
                      <span className="opacity-8">User Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup for Resources */}
        <div className="resources-newsletter mt-80 text-center sub-bg p-50 radius-15">
          <h4 className="fw-600 fz-25 mb-20">Get Notified of New Resources</h4>
          <p className="fz-16 mb-30 opacity-8">
            Be the first to access new templates, case studies, and operational guides 
            as I release them based on current client work.
          </p>
          <div className="newsletter-form">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <form className="d-flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="form-control mr-15"
                    required
                  />
                  <button type="submit" className="butn butn-md butn-bg main-colorbg radius-30">
                    <span>Subscribe</span>
                  </button>
                </form>
                <small className="opacity-8 mt-15 d-block">
                  No spam, unsubscribe anytime. Only valuable operational insights.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadableResources;