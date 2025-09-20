import React from 'react';

function CaseStudies() {
  const caseStudies = [
    {
      category: 'E-commerce',
      title: '10x Order Volume Scale',
      metrics: [
        { label: 'Order volume increase', value: '1000%' },
        { label: 'Faster processing', value: '40%' },
        { label: 'Customer satisfaction', value: '4.8/5' }
      ],
      description: 'Scaled e-commerce operations from 100 to 1,000+ daily orders while maintaining quality and customer satisfaction.',
      technologies: 'Shopify • WooCommerce • Custom automation',
      impact: 'Enabled the client to handle Black Friday traffic 10x higher than previous year without system failures.'
    },
    {
      category: 'Customer Success',
      title: 'CSAT Transformation',
      metrics: [
        { label: 'CSAT improvement', value: '22%' },
        { label: 'Ticket reduction', value: '35%' },
        { label: 'Team productivity boost', value: '50%' }
      ],
      description: 'Transformed customer support operations through process optimization and team training.',
      technologies: 'Zendesk • Salesforce • Custom workflows',
      impact: 'Reduced customer churn rate by 18% and increased upsell opportunities by 25%.'
    },
    {
      category: 'Property Management',
      title: 'Portfolio Optimization',
      metrics: [
        { label: 'Occupancy rate', value: '95%' },
        { label: 'Maintenance cost reduction', value: '30%' },
        { label: 'Properties managed', value: '200+' }
      ],
      description: 'Optimized property management operations resulting in higher occupancy and reduced costs.',
      technologies: 'AppFolio • Custom systems • Process automation',
      impact: 'Increased net operating income by 22% across the entire property portfolio.'
    }
  ];

  return (
    <section className="case-studies section-padding sub-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="sec-head text-center mb-80">
              <span className="sub-title main-color mb-5">Case Studies</span>
              <h3 className="fw-600 fz-50 mb-20">
                Client <span className="fw-200">Success Stories</span>
              </h3>
              <p className="fz-18">
                Real-world examples of operational transformation and measurable business impact.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {caseStudies.map((study, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-30">
              <div className="case-study-card h-100">
                <div className="case-header mb-20">
                  <span className="badge badge-outline mb-15">{study.category}</span>
                  <h4 className="fw-600 mb-15">{study.title}</h4>
                </div>
                
                <div className="case-metrics mb-20">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="metric-item mb-10">
                      <span className="fw-600 main-color">{metric.value}</span>
                      <span className="ml-10">{metric.label}</span>
                    </div>
                  ))}
                </div>
                
                <p className="opacity-8 mb-20">{study.description}</p>
                
                <div className="case-impact mb-20">
                  <h6 className="fw-600 mb-10">Key Impact:</h6>
                  <p className="opacity-8 fz-14">{study.impact}</p>
                </div>
                
                <div className="case-tech">
                  <small className="opacity-7">{study.technologies}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-50">
          <div className="col-12 text-center">
            <a href="/page-results" className="butn butn-md butn-bord radius-30">
              <span>View All Case Studies</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;