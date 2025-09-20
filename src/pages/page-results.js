import Lines from '../components/common/Lines';
import ProgressScroll from '../components/common/ProgressScroll';
import Cursor from '../components/common/cusor';
import LoadingScreen from '../components/common/loader';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import Marq2 from '../components/common/Marq2';
import { Helmet } from 'react-helmet';
import WOW from 'wowjs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PageResults() {
  const main = useRef();

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;

        script.onload = () => {
          resolve(true);
        };

        script.onerror = () => {
          reject(new Error(`Failed to load ${src}`));
        };

        document.body.appendChild(script);
      });
    };

    // Load scripts in correct order: gsap.min.js first, then ScrollSmoother.min.js, then smoother-script.js
    loadScript('/assets/js/gsap.min.js')
      .then(() => {
        return loadScript('/assets/js/ScrollSmoother.min.js');
      })
      .then(() => {
        // Once ScrollSmoother.min.js is loaded, load smoother-script.js
        return loadScript('/assets/js/smoother-script.js');
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      new WOW.WOW({
        animateClass: 'animated',
        offset: 100,
      }).init();
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Results & Case Studies - Jesel Cura Operations Consulting</title>
        <meta name="description" content="Proven results and case studies from Jesel Cura's customer success, e-commerce operations, and property management optimization projects. Real metrics and client success stories." />
        <meta name="keywords" content="operations results, customer success case studies, e-commerce optimization results, business metrics, performance improvement" />
        <link rel="canonical" href="https://jesspf.vercel.app/page-results" />
        <link rel="icon" href="/assets/imgs/JC-Logo.png" />
        <link rel="shortcut icon" href="/assets/imgs/JC-Logo.png" />
        <link rel="stylesheet" type="text/css" href="/assets/css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
        <script defer src="/assets/js/gsap.min.js"></script>
        <script defer src="/assets/js/ScrollSmoother.min.js"></script>
        <script defer src="/assets/js/smoother-script.js"></script>
        <script defer src="/assets/js/wow.min.js"></script>
        <script defer src="/assets/js/splitting.min.js"></script>
        <script defer src="/assets/js/isotope.pkgd.min.js"></script>
        <script defer src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"></script>
        <script defer src="/assets/js/ScrollTrigger.min.js"></script>
        <script defer src="/assets/js/TweenMax.min.js"></script>
        <script defer src="/assets/js/charming.min.js"></script>
        <script defer src="/assets/js/countdown.js"></script>
      </Helmet>
      <body className="main-bg">
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        <Navbar />
        <div id="smooth-wrapper" ref={main}>
          <div id="smooth-content">
            <main className="main-bg o-hidden">
              {/* Header Section */}
              <section className="page-header section-padding pb-0">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont text-center">
                        <h1 className="fw-600 fz-60 d-rotate wow">
                          <span className="rotate-text">
                            Results & <span className="fw-200">Case Studies</span>
                          </span>
                        </h1>
                        <p className="fz-18 mt-20">
                          Proven track record of delivering measurable results across customer success, 
                          e-commerce operations, and property management optimization projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Metrics Overview */}
              <section className="metrics-overview section-padding">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="sec-head mb-60">
                        <h2 className="fw-600 fz-50 mb-20">
                          Measurable <span className="fw-200">Impact</span>
                        </h2>
                        <p className="fz-18">
                          Real results from real projects across multiple industries and business functions.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="numbers-grid">
                        <div className="row">
                          <div className="col-6 text-center mb-30">
                            <h3 className="fw-600 fz-40 main-color">15%</h3>
                            <span className="opacity-8">Average CSAT Improvement</span>
                          </div>
                          <div className="col-6 text-center mb-30">
                            <h3 className="fw-600 fz-40 main-color">40%</h3>
                            <span className="opacity-8">Faster Resolution Times</span>
                          </div>
                          <div className="col-6 text-center mb-30">
                            <h3 className="fw-600 fz-40 main-color">3x</h3>
                            <span className="opacity-8">Order Volume Growth Handled</span>
                          </div>
                          <div className="col-6 text-center mb-30">
                            <h3 className="fw-600 fz-40 main-color">95%</h3>
                            <span className="opacity-8">Occupancy Rate Maintained</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Case Studies Section */}
              <section className="case-studies section-padding sub-bg">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="sec-head text-center mb-80">
                        <h2 className="fw-600 fz-50 mb-20">
                          Client <span className="fw-200">Success Stories</span>
                        </h2>
                        <p className="fz-18">
                          Detailed case studies showcasing the transformation of operations and the impact on business outcomes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {/* Case Study 1 - E-commerce */}
                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="case-study-card">
                        <div className="case-header mb-20">
                          <span className="badge badge-outline mb-15">E-commerce</span>
                          <h4 className="fw-600 mb-15">10x Order Volume Scale</h4>
                        </div>
                        <div className="case-metrics mb-20">
                          <div className="metric-item mb-10">
                            <span className="fw-600 main-color">1000%</span>
                            <span className="ml-10">Order volume increase</span>
                          </div>
                          <div className="metric-item mb-10">
                            <span className="fw-600 main-color">40%</span>
                            <span className="ml-10">Faster processing</span>
                          </div>
                          <div className="metric-item mb-10">
                            <span className="fw-600 main-color">4.8/5</span>
                            <span className="ml-10">Customer satisfaction</span>
                          </div>
                        </div>
                        <p className="opacity-8 mb-20">
                          Scaled e-commerce operations from 100 to 1,000+ daily orders while maintaining quality and customer satisfaction.
                        </p>
                        <div className="case-tech">
                          <small className="opacity-7">Shopify • WooCommerce • Custom automation</small>
                        </div>
                      </div>
                    </div>

                    {/* Case Study 2 - Customer Success */}
                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="case-study-card">
                        <div className="case-header mb-20">
                          <span className="badge badge-outline mb-15">Customer Success</span>
                          <h4 className="fw-600 mb-15">CSAT Transformation</h4>
                        </div>
                        <div className="case-metrics mb-20">
                          <div className="metric-item mb-10">
                            <span className="fw-600 main-color">22%</span>
                            <span className="ml-10">CSAT improvement</span>
                          </div>
                          <div className="metric-item mb-10">
                            <span className="fw-600 main-color">35%</span>
                            <span className="ml-10">Ticket reduction</span>
                          </div>
                          <div className="metric-item mb-10">
                            <span className="fw-600 main-color">50%</span>
                            <span className="ml-10">Team productivity boost</span>
                          </div>
                        </div>
                        <p className="opacity-8 mb-20">
                          Transformed customer support operations through process optimization and team training.
                        </p>
                        <div className="case-tech">
                          <small className="opacity-7">Zendesk • Salesforce • Custom workflows</small>
                        </div>
                      </div>
                    </div>

                    {/* Case Study 3 - Property Management */}
                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="case-study-card">
                        <div className="case-header mb-20">
                          <span className="badge badge-outline mb-15">Property Management</span>
                          <h4 className="fw-600 mb-15">Portfolio Optimization</h4>
                        </div>
                        <div className="case-metrics mb-20">
                          <div className="metric-item mb-10">
                            <span className="fw-600 main-color">95%</span>
                            <span className="ml-10">Occupancy rate</span>
                          </div>
                          <div className="metric-item mb-10">
                            <span className="fw-600 main-color">30%</span>
                            <span className="ml-10">Maintenance cost reduction</span>
                          </div>
                          <div className="metric-item mb-10">
                            <span className="fw-600 main-color">200+</span>
                            <span className="ml-10">Properties managed</span>
                          </div>
                        </div>
                        <p className="opacity-8 mb-20">
                          Optimized property management operations resulting in higher occupancy and reduced costs.
                        </p>
                        <div className="case-tech">
                          <small className="opacity-7">AppFolio • Custom systems • Process automation</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ROI Calculator/Estimator */}
              <section className="roi-section section-padding">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="sec-head text-center mb-60">
                        <h2 className="fw-600 fz-50 mb-20">
                          Potential <span className="fw-200">ROI</span>
                        </h2>
                        <p className="fz-18">
                          Based on historical project data, here's what similar organizations have achieved.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="roi-card text-center">
                        <div className="roi-icon mb-20">
                          <i className="fas fa-users fz-30 main-color"></i>
                        </div>
                        <h4 className="fw-600 mb-15">Customer Success</h4>
                        <div className="roi-estimate mb-20">
                          <span className="fz-40 fw-600 main-color">300-500%</span>
                          <p className="opacity-8">ROI within 12 months</p>
                        </div>
                        <ul className="list-unstyled">
                          <li className="mb-10">• Reduced churn costs</li>
                          <li className="mb-10">• Increased upsell opportunities</li>
                          <li className="mb-10">• Improved team efficiency</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="roi-card text-center">
                        <div className="roi-icon mb-20">
                          <i className="fas fa-shopping-cart fz-30 main-color"></i>
                        </div>
                        <h4 className="fw-600 mb-15">E-commerce Operations</h4>
                        <div className="roi-estimate mb-20">
                          <span className="fz-40 fw-600 main-color">400-700%</span>
                          <p className="opacity-8">ROI within 6 months</p>
                        </div>
                        <ul className="list-unstyled">
                          <li className="mb-10">• Higher order processing capacity</li>
                          <li className="mb-10">• Reduced operational costs</li>
                          <li className="mb-10">• Improved customer experience</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="roi-card text-center">
                        <div className="roi-icon mb-20">
                          <i className="fas fa-building fz-30 main-color"></i>
                        </div>
                        <h4 className="fw-600 mb-15">Property Management</h4>
                        <div className="roi-estimate mb-20">
                          <span className="fz-40 fw-600 main-color">200-400%</span>
                          <p className="opacity-8">ROI within 18 months</p>
                        </div>
                        <ul className="list-unstyled">
                          <li className="mb-10">• Higher occupancy rates</li>
                          <li className="mb-10">• Reduced maintenance costs</li>
                          <li className="mb-10">• Streamlined operations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="call-action section-padding sub-bg">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="content text-center">
                        <h2 className="fw-600 fz-50 mb-30">
                          Ready to Achieve <span className="fw-200">Similar Results?</span>
                        </h2>
                        <p className="fz-18 mb-40">
                          Let's discuss how these proven strategies can be adapted for your specific business needs and objectives.
                        </p>
                        <a href="/page-contact" className="butn butn-md butn-bord radius-30">
                          <span>Get Your Free Results Assessment</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <Footer />
            <Marq2 />
          </div>
        </div>
      </body>
    </>
  );
}