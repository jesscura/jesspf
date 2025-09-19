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

export default function PageProcess() {
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
        <title>Process & Methodology - Jesel Cura Operations Consulting</title>
        <meta name="description" content="Learn about Jesel Cura's proven process for optimizing customer success, e-commerce operations, and property management. Structured approach delivering measurable results." />
        <meta name="keywords" content="operations process, customer success methodology, e-commerce optimization process, business process improvement, project methodology" />
        <link rel="canonical" href="https://jesspf.vercel.app/page-process" />
        <link rel="icon" href="/assets/imgs/JC-Logo.png" />
        <link rel="shortcut icon" href="/assets/imgs/JC-Logo.png" />
        <link rel="stylesheet" type="text/css" href="/assets/css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap"
        />
        <script src="/assets/js/ScrollTrigger.min.js" defer />
        <script src="/assets/js/ScrollSmoother.min.js" defer />
        <script defer src="/assets/js/gsap.min.js"></script>
        <script defer src="/assets/js/splitting.min.js"></script>
        <script defer src="/assets/js/isotope.pkgd.min.js"></script>
        <script defer src="/assets/js/plugins.js"></script>
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
                            Process & <span className="fw-200">Methodology</span>
                          </span>
                        </h1>
                        <p className="fz-18 mt-20">
                          My proven approach to delivering measurable results in customer success, 
                          e-commerce operations, and property management optimization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Overview Section */}
              <section className="intro-about section-padding">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="cont md-mb50">
                        <h2 className="fw-600 fz-50 mb-30">
                          Structured Approach to <span className="fw-200">Operational Excellence</span>
                        </h2>
                        <p className="fz-16 mb-30">
                          Every project follows a systematic methodology developed through years of optimizing 
                          operations for SaaS companies, e-commerce stores, and property management firms. 
                          This process ensures consistent, measurable results.
                        </p>
                        <div className="numbers mt-50">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="item mb-30">
                                <h3 className="fw-600 fz-40 main-color">100%</h3>
                                <span className="opacity-8">Success Rate</span>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="item mb-30">
                                <h3 className="fw-600 fz-40 main-color">50+</h3>
                                <span className="opacity-8">Projects Completed</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="img-box">
                        <div className="img">
                          <img src="/assets/imgs/works/jesel/customer-success.jpg" alt="Process methodology overview" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4-Phase Process */}
              <section className="process-phases section-padding sub-bg">
                <div className="container">
                  <div className="sec-head mb-80 text-center">
                    <h2 className="fw-600 fz-50">
                      4-Phase <span className="fw-200">Implementation Process</span>
                    </h2>
                    <p className="fz-18 mt-20">
                      A systematic approach that delivers results within 90 days
                    </p>
                  </div>
                  <div className="row">
                    {/* Phase 1 */}
                    <div className="col-lg-6 col-md-6">
                      <div className="item mb-50">
                        <div className="d-flex align-items-start">
                          <div className="icon-box mr-30">
                            <div className="icon-circle main-bg">
                              <span className="fz-20 fw-600">01</span>
                            </div>
                          </div>
                          <div className="cont">
                            <h4 className="fw-600 mb-15">Discovery & Assessment</h4>
                            <p className="opacity-8 mb-20">
                              Deep dive into current processes, pain points, and goals. 
                              Analyze existing systems, team workflows, and performance metrics.
                            </p>
                            <ul className="list-unstyled">
                              <li className="mb-10">• Current state analysis</li>
                              <li className="mb-10">• Stakeholder interviews</li>
                              <li className="mb-10">• System audits</li>
                              <li className="mb-10">• Gap identification</li>
                            </ul>
                            <div className="timeline mt-20">
                              <span className="badge badge-outline">Week 1-2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="col-lg-6 col-md-6">
                      <div className="item mb-50">
                        <div className="d-flex align-items-start">
                          <div className="icon-box mr-30">
                            <div className="icon-circle main-bg">
                              <span className="fz-20 fw-600">02</span>
                            </div>
                          </div>
                          <div className="cont">
                            <h4 className="fw-600 mb-15">Strategy & Planning</h4>
                            <p className="opacity-8 mb-20">
                              Develop customized optimization strategy with clear priorities, 
                              timelines, and success metrics. Create detailed implementation roadmap.
                            </p>
                            <ul className="list-unstyled">
                              <li className="mb-10">• Strategic roadmap creation</li>
                              <li className="mb-10">• Process redesign</li>
                              <li className="mb-10">• Tool recommendations</li>
                              <li className="mb-10">• Success metrics definition</li>
                            </ul>
                            <div className="timeline mt-20">
                              <span className="badge badge-outline">Week 3-4</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="col-lg-6 col-md-6">
                      <div className="item mb-50">
                        <div className="d-flex align-items-start">
                          <div className="icon-box mr-30">
                            <div className="icon-circle main-bg">
                              <span className="fz-20 fw-600">03</span>
                            </div>
                          </div>
                          <div className="cont">
                            <h4 className="fw-600 mb-15">Implementation & Setup</h4>
                            <p className="opacity-8 mb-20">
                              Execute the optimization plan with hands-on system configuration, 
                              workflow automation, and process documentation.
                            </p>
                            <ul className="list-unstyled">
                              <li className="mb-10">• System configuration</li>
                              <li className="mb-10">• Workflow automation</li>
                              <li className="mb-10">• SOP documentation</li>
                              <li className="mb-10">• Quality assurance testing</li>
                            </ul>
                            <div className="timeline mt-20">
                              <span className="badge badge-outline">Week 5-8</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phase 4 */}
                    <div className="col-lg-6 col-md-6">
                      <div className="item mb-50">
                        <div className="d-flex align-items-start">
                          <div className="icon-box mr-30">
                            <div className="icon-circle main-bg">
                              <span className="fz-20 fw-600">04</span>
                            </div>
                          </div>
                          <div className="cont">
                            <h4 className="fw-600 mb-15">Training & Optimization</h4>
                            <p className="opacity-8 mb-20">
                              Train team members, monitor performance, and fine-tune processes 
                              based on real-world usage and feedback.
                            </p>
                            <ul className="list-unstyled">
                              <li className="mb-10">• Team training sessions</li>
                              <li className="mb-10">• Performance monitoring</li>
                              <li className="mb-10">• Process refinement</li>
                              <li className="mb-10">• Knowledge transfer</li>
                            </ul>
                            <div className="timeline mt-20">
                              <span className="badge badge-outline">Week 9-12</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Service-Specific Methodologies */}
              <section className="services-methods section-padding">
                <div className="container">
                  <div className="sec-head mb-80 text-center">
                    <h2 className="fw-600 fz-50">
                      Service-Specific <span className="fw-200">Approaches</span>
                    </h2>
                  </div>
                  <div className="row">
                    {/* Customer Success */}
                    <div className="col-lg-4">
                      <div className="item text-center mb-50">
                        <div className="icon mb-30">
                          <img src="/assets/imgs/works/jesel/customer-success.jpg" alt="Customer Success" className="radius-15" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
                        </div>
                        <h4 className="fw-600 mb-20">Customer Success</h4>
                        <ul className="list-unstyled text-left">
                          <li className="mb-10">• CSAT/NPS baseline measurement</li>
                          <li className="mb-10">• Support ticket analysis</li>
                          <li className="mb-10">• Knowledge base optimization</li>
                          <li className="mb-10">• Automation workflow setup</li>
                          <li className="mb-10">• Team training programs</li>
                          <li className="mb-10">• Performance monitoring dashboards</li>
                        </ul>
                      </div>
                    </div>

                    {/* E-commerce Operations */}
                    <div className="col-lg-4">
                      <div className="item text-center mb-50">
                        <div className="icon mb-30">
                          <img src="/assets/imgs/works/jesel/ecommerce-ops.jpg" alt="E-commerce Operations" className="radius-15" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
                        </div>
                        <h4 className="fw-600 mb-20">E-commerce Operations</h4>
                        <ul className="list-unstyled text-left">
                          <li className="mb-10">• Order volume analysis</li>
                          <li className="mb-10">• Fulfillment process mapping</li>
                          <li className="mb-10">• Customer service optimization</li>
                          <li className="mb-10">• Returns/refunds automation</li>
                          <li className="mb-10">• Seasonal scaling preparation</li>
                          <li className="mb-10">• Performance metrics tracking</li>
                        </ul>
                      </div>
                    </div>

                    {/* Property Management */}
                    <div className="col-lg-4">
                      <div className="item text-center mb-50">
                        <div className="icon mb-30">
                          <img src="/assets/imgs/works/jesel/property-mgmt.jpg" alt="Property Management" className="radius-15" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
                        </div>
                        <h4 className="fw-600 mb-20">Property Management</h4>
                        <ul className="list-unstyled text-left">
                          <li className="mb-10">• Portfolio assessment</li>
                          <li className="mb-10">• Tenant communication systems</li>
                          <li className="mb-10">• Maintenance workflow automation</li>
                          <li className="mb-10">• Financial reporting setup</li>
                          <li className="mb-10">• Compliance documentation</li>
                          <li className="mb-10">• Market analysis and pricing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Success Metrics */}
              <section className="success-metrics section-padding sub-bg">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="cont">
                        <h2 className="fw-600 fz-50 mb-30">
                          Measurable <span className="fw-200">Success Indicators</span>
                        </h2>
                        <p className="fz-16 mb-30">
                          Every project includes clear success metrics and regular progress tracking 
                          to ensure objectives are met and exceeded.
                        </p>
                        <div className="metrics-list">
                          <div className="metric-item mb-30">
                            <h5 className="fw-600 mb-10">Customer Success Projects</h5>
                            <p className="opacity-8">CSAT improvements, response time reduction, ticket volume optimization, team productivity gains</p>
                          </div>
                          <div className="metric-item mb-30">
                            <h5 className="fw-600 mb-10">E-commerce Operations</h5>
                            <p className="opacity-8">Order processing efficiency, customer satisfaction rates, operational cost reduction, scalability improvements</p>
                          </div>
                          <div className="metric-item mb-30">
                            <h5 className="fw-600 mb-10">Property Management</h5>
                            <p className="opacity-8">Occupancy rates, tenant satisfaction, maintenance response times, operational efficiency</p>
                          </div>
                        </div>
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

              {/* CTA Section */}
              <section className="call-action section-padding">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="content text-center">
                        <h2 className="fw-600 fz-50 mb-30">
                          Ready to Optimize <span className="fw-200">Your Operations?</span>
                        </h2>
                        <p className="fz-18 mb-40">
                          Let's discuss how my proven methodology can deliver measurable results for your business.
                        </p>
                        <a href="/page-contact" className="butn butn-md butn-bord radius-30">
                          <span>Schedule Your Free Consultation</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <Marq2 />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}