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

export default function PageTools() {
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

  const toolCategories = {
    customerSuccess: [
      { name: 'Zendesk', description: 'Comprehensive customer support platform', expertise: 'Advanced', projects: '12+' },
      { name: 'Intercom', description: 'Customer messaging and support automation', expertise: 'Expert', projects: '8+' },
      { name: 'Freshdesk', description: 'Cloud-based customer support software', expertise: 'Intermediate', projects: '5+' },
      { name: 'Help Scout', description: 'Simple help desk for growing businesses', expertise: 'Advanced', projects: '6+' },
      { name: 'HubSpot Service Hub', description: 'Customer service and support tools', expertise: 'Intermediate', projects: '4+' },
      { name: 'Notion', description: 'Knowledge base and documentation platform', expertise: 'Expert', projects: '15+' }
    ],
    ecommerce: [
      { name: 'Shopify', description: 'Leading e-commerce platform', expertise: 'Expert', projects: '20+' },
      { name: 'WooCommerce', description: 'WordPress e-commerce solution', expertise: 'Advanced', projects: '10+' },
      { name: 'Gorgias', description: 'E-commerce customer service platform', expertise: 'Expert', projects: '8+' },
      { name: 'Klaviyo', description: 'Email marketing and automation', expertise: 'Advanced', projects: '6+' },
      { name: 'ReCharge', description: 'Subscription billing and management', expertise: 'Intermediate', projects: '4+' },
      { name: 'Zapier', description: 'Workflow automation and integrations', expertise: 'Expert', projects: '25+' }
    ],
    propertyManagement: [
      { name: 'AppFolio', description: 'Comprehensive property management software', expertise: 'Expert', projects: '15+' },
      { name: 'Buildium', description: 'Property management and accounting', expertise: 'Advanced', projects: '12+' },
      { name: 'Rent Manager', description: 'Property management and tenant screening', expertise: 'Advanced', projects: '8+' },
      { name: 'Cozy (now Apartments.com)', description: 'Rental property management', expertise: 'Intermediate', projects: '5+' },
      { name: 'TenantCloud', description: 'Online property management platform', expertise: 'Intermediate', projects: '4+' },
      { name: 'Propertyware', description: 'Single-family rental management', expertise: 'Beginner', projects: '2+' }
    ],
    productivity: [
      { name: 'Slack', description: 'Team communication and collaboration', expertise: 'Expert', projects: '30+' },
      { name: 'Asana', description: 'Project management and team coordination', expertise: 'Advanced', projects: '15+' },
      { name: 'Trello', description: 'Visual project management boards', expertise: 'Expert', projects: '20+' },
      { name: 'Monday.com', description: 'Work operating system and CRM', expertise: 'Advanced', projects: '8+' },
      { name: 'Loom', description: 'Video messaging and screen recording', expertise: 'Expert', projects: '25+' },
      { name: 'Google Workspace', description: 'Cloud productivity and collaboration suite', expertise: 'Expert', projects: '50+' }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Tools & Integrations - Jesel Cura Operations Consulting</title>
        <meta name="description" content="Comprehensive list of tools and platforms Jesel Cura specializes in for customer success, e-commerce operations, and property management optimization." />
        <meta name="keywords" content="business tools, software integrations, customer success tools, e-commerce platforms, property management software, automation tools" />
        <link rel="canonical" href="https://jesspf.vercel.app/page-tools" />
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
                            Tools & <span className="fw-200">Integrations</span>
                          </span>
                        </h1>
                        <p className="fz-18 mt-20">
                          Comprehensive expertise across leading platforms for customer success, 
                          e-commerce operations, and property management optimization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Overview Stats */}
              <section className="tools-overview section-padding">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="numbers-grid">
                        <div className="row text-center">
                          <div className="col-lg-3 col-md-6 mb-30">
                            <h3 className="fw-600 fz-40 main-color">50+</h3>
                            <span className="opacity-8">Tools Mastered</span>
                          </div>
                          <div className="col-lg-3 col-md-6 mb-30">
                            <h3 className="fw-600 fz-40 main-color">200+</h3>
                            <span className="opacity-8">Integrations Built</span>
                          </div>
                          <div className="col-lg-3 col-md-6 mb-30">
                            <h3 className="fw-600 fz-40 main-color">100%</h3>
                            <span className="opacity-8">Success Rate</span>
                          </div>
                          <div className="col-lg-3 col-md-6 mb-30">
                            <h3 className="fw-600 fz-40 main-color">5+</h3>
                            <span className="opacity-8">Years Experience</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Customer Success Tools */}
              <section className="tools-category section-padding sub-bg">
                <div className="container">
                  <div className="sec-head mb-80">
                    <h2 className="fw-600 fz-50 mb-20">
                      Customer Success <span className="fw-200">& Support Tools</span>
                    </h2>
                    <p className="fz-16 opacity-8">
                      Platforms I use to optimize customer support, build knowledge bases, and improve satisfaction scores.
                    </p>
                  </div>
                  <div className="row">
                    {toolCategories.customerSuccess.map((tool, index) => (
                      <div key={index} className="col-lg-4 col-md-6 mb-30">
                        <div className="tool-card sub-bg">
                          <div className="card-content p-30">
                            <h5 className="fw-600 mb-15">{tool.name}</h5>
                            <p className="opacity-8 mb-20">{tool.description}</p>
                            <div className="tool-stats">
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <span className="badge badge-outline">{tool.expertise}</span>
                                </div>
                                <div>
                                  <small className="p-color">{tool.projects} projects</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* E-commerce Tools */}
              <section className="tools-category section-padding">
                <div className="container">
                  <div className="sec-head mb-80">
                    <h2 className="fw-600 fz-50 mb-20">
                      E-commerce <span className="fw-200">& Operations Tools</span>
                    </h2>
                    <p className="fz-16 opacity-8">
                      Platforms for scaling e-commerce operations, automating workflows, and managing customer relationships.
                    </p>
                  </div>
                  <div className="row">
                    {toolCategories.ecommerce.map((tool, index) => (
                      <div key={index} className="col-lg-4 col-md-6 mb-30">
                        <div className="tool-card main-bg">
                          <div className="card-content p-30">
                            <h5 className="fw-600 mb-15">{tool.name}</h5>
                            <p className="opacity-8 mb-20">{tool.description}</p>
                            <div className="tool-stats">
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <span className="badge badge-outline">{tool.expertise}</span>
                                </div>
                                <div>
                                  <small className="p-color">{tool.projects} projects</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Property Management Tools */}
              <section className="tools-category section-padding sub-bg">
                <div className="container">
                  <div className="sec-head mb-80">
                    <h2 className="fw-600 fz-50 mb-20">
                      Property Management <span className="fw-200">Software</span>
                    </h2>
                    <p className="fz-16 opacity-8">
                      Comprehensive platforms for managing rental properties, tenant relationships, and financial operations.
                    </p>
                  </div>
                  <div className="row">
                    {toolCategories.propertyManagement.map((tool, index) => (
                      <div key={index} className="col-lg-4 col-md-6 mb-30">
                        <div className="tool-card sub-bg">
                          <div className="card-content p-30">
                            <h5 className="fw-600 mb-15">{tool.name}</h5>
                            <p className="opacity-8 mb-20">{tool.description}</p>
                            <div className="tool-stats">
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <span className="badge badge-outline">{tool.expertise}</span>
                                </div>
                                <div>
                                  <small className="p-color">{tool.projects} projects</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Productivity & Automation Tools */}
              <section className="tools-category section-padding">
                <div className="container">
                  <div className="sec-head mb-80">
                    <h2 className="fw-600 fz-50 mb-20">
                      Productivity & <span className="fw-200">Automation Tools</span>
                    </h2>
                    <p className="fz-16 opacity-8">
                      Essential tools for team collaboration, project management, and workflow automation across all projects.
                    </p>
                  </div>
                  <div className="row">
                    {toolCategories.productivity.map((tool, index) => (
                      <div key={index} className="col-lg-4 col-md-6 mb-30">
                        <div className="tool-card main-bg">
                          <div className="card-content p-30">
                            <h5 className="fw-600 mb-15">{tool.name}</h5>
                            <p className="opacity-8 mb-20">{tool.description}</p>
                            <div className="tool-stats">
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <span className="badge badge-outline">{tool.expertise}</span>
                                </div>
                                <div>
                                  <small className="p-color">{tool.projects} projects</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Integration Capabilities */}
              <section className="integration-capabilities section-padding sub-bg">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="cont">
                        <h2 className="fw-600 fz-50 mb-30">
                          Custom <span className="fw-200">Integration Solutions</span>
                        </h2>
                        <p className="fz-16 mb-30">
                          Beyond individual tool expertise, I specialize in creating seamless integrations 
                          that connect your entire tech stack for maximum efficiency.
                        </p>
                        
                        <div className="integration-types">
                          <div className="integration-item mb-30">
                            <h5 className="fw-600 mb-10">API Integrations</h5>
                            <p className="opacity-8">Custom connections between platforms for real-time data sync and workflow automation.</p>
                          </div>
                          
                          <div className="integration-item mb-30">
                            <h5 className="fw-600 mb-10">Zapier Workflows</h5>
                            <p className="opacity-8">Advanced automation workflows connecting 3,000+ apps without code.</p>
                          </div>
                          
                          <div className="integration-item mb-30">
                            <h5 className="fw-600 mb-10">Webhook Configurations</h5>
                            <p className="opacity-8">Real-time event triggers and data transfers between systems.</p>
                          </div>
                          
                          <div className="integration-item mb-30">
                            <h5 className="fw-600 mb-10">Data Migration</h5>
                            <p className="opacity-8">Seamless transfer of data between platforms during system transitions.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="integration-stats">
                        <h3 className="fw-600 fz-30 mb-40">Integration Success Stories</h3>
                        
                        <div className="stat-item mb-30">
                          <div className="d-flex align-items-center mb-15">
                            <h4 className="fw-600 main-color">Shopify + Gorgias + Klaviyo</h4>
                          </div>
                          <p className="opacity-8 mb-10">Unified customer data across e-commerce, support, and marketing platforms</p>
                          <small className="p-color">Result: 40% faster customer response times</small>
                        </div>
                        
                        <div className="stat-item mb-30">
                          <div className="d-flex align-items-center mb-15">
                            <h4 className="fw-600 main-color">Zendesk + Slack + Notion</h4>
                          </div>
                          <p className="opacity-8 mb-10">Automated ticket routing and knowledge base updates</p>
                          <small className="p-color">Result: 60% reduction in ticket escalations</small>
                        </div>
                        
                        <div className="stat-item mb-30">
                          <div className="d-flex align-items-center mb-15">
                            <h4 className="fw-600 main-color">AppFolio + Google Workspace</h4>
                          </div>
                          <p className="opacity-8 mb-10">Streamlined property management reporting and communication</p>
                          <small className="p-color">Result: 50% faster financial reporting</small>
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
                          Need Help With <span className="fw-200">Tool Integration?</span>
                        </h2>
                        <p className="fz-18 mb-40">
                          Let's discuss how I can optimize your current tools or implement new solutions 
                          for better operational efficiency.
                        </p>
                        <a href="/page-contact" className="butn butn-md butn-bord radius-30">
                          <span>Get Your Free Tool Audit</span>
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