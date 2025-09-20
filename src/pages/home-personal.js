import Lines from '../components/common/Lines';
import ProgressScroll from '../components/common/ProgressScroll';
import Cursor from '../components/common/cusor';
import LoadingScreen from '../components/common/loader';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import Marq2 from '../components/common/Marq2';
import { Helmet } from 'react-helmet';
import Header from '../components/home-personal/Header';
import Clients from '../components/common/Clients';

import Blog from '../components/home-digital-agency/Blog';

import Testimonials from '../components/home-modern-studio/Testimonials';
import Marq from '../components/home-personal/Marq';
import About from '../components/home-personal/About';
import Portfolio from '../components/home-personal/Portfolio';
import Skills from '../components/home-personal/Skills';
import ResultsDashboard from '../components/home-personal/ResultsDashboard';
import TrustStrip from '../components/common/TrustStrip';
import CaseStudies from '../components/common/CaseStudies';
import DownloadableResources from '../components/common/DownloadableResources';
import WOW from 'wowjs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomePersonal() {
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

    // Load ScrollSmoother.min.js first
    loadScript('/assets/js/gsap.min.js')
      .then(() => {
        loadScript('/assets/js/ScrollSmoother.min.js');
      })
      .then(() => {
        // Once ScrollSmoother.min.js is loaded, load smoother-script.js
        return loadScript('/assets/js/smoother-script.js');
      })
      .catch((error) => {
        console.error(error.message);
      });

    // // Cleanup function
    // return () => {
    //   document.body.removeChild(script);
    // };
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
        <title>Jesel Cura - Customer Success & E-commerce Operations Specialist | 100% Upwork Success Rate</title>
        <meta name="description" content="Experienced operations specialist helping SaaS & e-commerce companies scale efficiently. Proven results: 15% CSAT improvement, 3x order volume growth, 50+ properties managed. Get your free consultation." />
        <meta name="keywords" content="customer success consultant, e-commerce operations, property management, business process optimization, SaaS consulting, operations specialist, Upwork freelancer" />
        <meta name="author" content="Jesel Cura" />
        <link rel="canonical" href="https://jesspf.vercel.app/" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Jesel Cura - Customer Success & E-commerce Operations Specialist" />
        <meta property="og:description" content="Experienced operations specialist with proven results: 15% CSAT improvement, 3x order volume growth, 50+ properties managed. 100% Upwork success rate." />
        <meta property="og:url" content="https://jesspf.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://jesspf.vercel.app/assets/imgs/JC-Logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jesel Cura - Customer Success & E-commerce Operations Specialist" />
        <meta name="twitter:description" content="Proven operations specialist: 15% CSAT improvement, 3x e-commerce growth, 50+ properties managed. 100% Upwork success rate." />
        <meta name="twitter:image" content="https://jesspf.vercel.app/assets/imgs/JC-Logo.png" />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        
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
      <body className="home-personal">
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        <Navbar />
        <div id="smooth-wrapper" ref={main}>
          <div id="smooth-content">
            <main className="main-bg o-hidden">
              <Header />
              <Marq />
              <About />
              <Portfolio />
              <Skills />
              <ResultsDashboard />
              <TrustStrip />
              <CaseStudies />
              <DownloadableResources />
              <Testimonials />
              <Clients />
              <Blog />
              <Marq2 />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
