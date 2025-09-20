import React from 'react';

function ResultsDashboard() {
  const overallStats = {
    clientsSaved: '2,400+',
    clientsServed: '50+',
    projectsCompleted: '75+',
    successRate: '100%',
    avgCSATImprovement: '15%',
    avgTimeReduction: '40%',
    propertiesManaged: '200+',
    orderVolumeHandled: '10x'
  };

  const detailedMetrics = [
    {
      category: 'Customer Success',
      metrics: [
        { label: 'Average CSAT Improvement', value: '15%', description: 'Across 20+ customer success projects' },
        { label: 'Support Ticket Reduction', value: '35%', description: 'Through process optimization and automation' },
        { label: 'Team Productivity Increase', value: '50%', description: 'Via workflow improvements and training' },
        { label: 'Knowledge Base Usage', value: '+120%', description: 'Improved documentation and accessibility' }
      ]
    },
    {
      category: 'E-commerce Operations',
      metrics: [
        { label: 'Order Volume Growth Handled', value: '3-10x', description: 'Successfully scaled operations for growth' },
        { label: 'Resolution Time Reduction', value: '40%', description: 'Through automation and process optimization' },
        { label: 'Customer Satisfaction', value: '4.8/5', description: 'Maintained during high-growth periods' },
        { label: 'Operational Cost Savings', value: '25%', description: 'Through efficiency improvements' }
      ]
    },
    {
      category: 'Property Management',
      metrics: [
        { label: 'Properties Managed', value: '200+', description: 'Across multiple markets and property types' },
        { label: 'Average Occupancy Rate', value: '95%', description: 'Consistently maintained across portfolio' },
        { label: 'Tenant Satisfaction', value: '4.7/5', description: 'Through improved communication systems' },
        { label: 'Maintenance Response Time', value: '-60%', description: 'Faster issue resolution and coordination' }
      ]
    }
  ];

  return (
    <section className="results-dashboard section-padding sub-bg">
      <div className="container">
        <div className="sec-head mb-80 text-center">
          <span className="sub-title main-color mb-5">Results Dashboard</span>
          <h3 className="fw-600 fz-50 text-u d-rotate wow">
            <span className="rotate-text">
              Proven <span className="fw-200">Impact.</span>
            </span>
          </h3>
          <p className="fz-18 mt-20 opacity-8">
            Comprehensive metrics from 75+ successful projects across customer success, 
            e-commerce operations, and property management.
          </p>
        </div>

        {/* Overall Statistics */}
        <div className="overall-stats mb-80">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="stat-card text-center p-30 main-bg radius-15">
                <h3 className="fw-600 fz-40 main-color mb-10">{overallStats.clientsServed}</h3>
                <span className="opacity-8">Clients Served</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="stat-card text-center p-30 main-bg radius-15">
                <h3 className="fw-600 fz-40 main-color mb-10">{overallStats.clientsSaved}</h3>
                <span className="opacity-8">Hours Saved for Clients</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="stat-card text-center p-30 main-bg radius-15">
                <h3 className="fw-600 fz-40 main-color mb-10">{overallStats.successRate}</h3>
                <span className="opacity-8">Project Success Rate</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="stat-card text-center p-30 main-bg radius-15">
                <h3 className="fw-600 fz-40 main-color mb-10">{overallStats.avgCSATImprovement}</h3>
                <span className="opacity-8">Avg CSAT Improvement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Metrics by Category */}
        <div className="detailed-metrics">
          {detailedMetrics.map((category, categoryIndex) => (
            <div key={categoryIndex} className="category-section mb-60">
              <h4 className="fw-600 fz-30 mb-40 text-center">{category.category} Results</h4>
              <div className="row">
                {category.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="col-lg-6 mb-30">
                    <div className="metric-card p-30 main-bg radius-10">
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="metric-info">
                          <h5 className="fw-600 mb-10">{metric.label}</h5>
                          <p className="opacity-8 mb-0">{metric.description}</p>
                        </div>
                        <div className="metric-value">
                          <span className="fw-600 fz-24 main-color">{metric.value}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements Timeline */}
        <div className="achievements-timeline mt-80">
          <h4 className="fw-600 fz-30 mb-40 text-center">Key Achievements Over Time</h4>
          <div className="row">
            <div className="col-lg-4 mb-30">
              <div className="achievement-card text-center p-30 main-bg radius-15">
                <div className="achievement-year mb-20">
                  <span className="badge badge-outline">2024</span>
                </div>
                <h5 className="fw-600 mb-15">100% Upwork Success Rate</h5>
                <p className="opacity-8">Maintained perfect client satisfaction across all freelance projects</p>
              </div>
            </div>
            <div className="col-lg-4 mb-30">
              <div className="achievement-card text-center p-30 main-bg radius-15">
                <div className="achievement-year mb-20">
                  <span className="badge badge-outline">2023-2024</span>
                </div>
                <h5 className="fw-600 mb-15">75+ Projects Completed</h5>
                <p className="opacity-8">Successfully delivered operations optimization across multiple industries</p>
              </div>
            </div>
            <div className="col-lg-4 mb-30">
              <div className="achievement-card text-center p-30 main-bg radius-15">
                <div className="achievement-year mb-20">
                  <span className="badge badge-outline">Ongoing</span>
                </div>
                <h5 className="fw-600 mb-15">200+ Properties Managed</h5>
                <p className="opacity-8">Scaled property management operations across multiple markets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Impact Stories */}
        <div className="impact-stories mt-80">
          <h4 className="fw-600 fz-30 mb-40 text-center">Client Impact Highlights</h4>
          <div className="row">
            <div className="col-lg-4 mb-30">
              <div className="impact-card p-30 main-bg radius-15">
                <div className="impact-metric mb-20">
                  <span className="fw-600 fz-24 main-color">15% CSAT Increase</span>
                </div>
                <h6 className="fw-600 mb-10">SaaS Company Transformation</h6>
                <p className="opacity-8 mb-15">Complete helpdesk restructure and team training program</p>
                <div className="timeline">
                  <small className="p-color">Achieved in 90 days</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-30">
              <div className="impact-card p-30 main-bg radius-15">
                <div className="impact-metric mb-20">
                  <span className="fw-600 fz-24 main-color">3x Volume Growth</span>
                </div>
                <h6 className="fw-600 mb-10">E-commerce Scaling Success</h6>
                <p className="opacity-8 mb-15">Handled massive growth while maintaining 4.8/5 satisfaction</p>
                <div className="timeline">
                  <small className="p-color">Sustained over 6 months</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-30">
              <div className="impact-card p-30 main-bg radius-15">
                <div className="impact-metric mb-20">
                  <span className="fw-600 fz-24 main-color">95% Occupancy</span>
                </div>
                <h6 className="fw-600 mb-10">Property Portfolio Excellence</h6>
                <p className="opacity-8 mb-15">Maintained high occupancy across 50+ diverse properties</p>
                <div className="timeline">
                  <small className="p-color">Consistent performance</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="results-cta mt-80 text-center">
          <h4 className="fw-600 fz-30 mb-20">Ready to See Similar Results?</h4>
          <p className="fz-16 mb-30 opacity-8">
            These metrics represent real results from actual client projects. 
            Let's discuss how I can deliver similar outcomes for your business.
          </p>
          <a href="/page-contact" className="butn butn-md butn-bord radius-30">
            <span>Get Your Results Estimate</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ResultsDashboard;