import Lines from '../components/common/Lines';
import ProgressScroll from '../components/common/ProgressScroll';
import Cursor from '../components/common/cusor';
import LoadingScreen from '../components/common/loader';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import { Helmet } from 'react-helmet';
import { titleFor } from '../common/siteMeta';
import BlogDetailHeader from '../components/blog-detail/BlogDetailHeader';
import BlogDetailContent from '../components/blog-detail/BlogDetailContent';
import WOW from 'wowjs';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function BlogDetail() {
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
      .then(() => {
        loadScript('/assets/js/TweenMax.min.js');
      })
      .then(() => {
        loadScript('/assets/js/imgReveal/imagesloaded.pkgd.min.js');
      })
      .then(() => {
        loadScript('/assets/js/imgReveal/demo.js');
      })
      .then(() => {
        // Load other scripts
        loadScript('/assets/js/common_js.js');
      })
      .catch((error) => {
        console.error('Error loading scripts:', error);
      });
  }, []);
  
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
    },
    { scope: main }
  );

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
        <title>{titleFor('Blog Post')}</title>
        <link rel="icon" href="/assets/imgs/favicon.ico" />
        <link rel="shortcut icon" href="/assets/imgs/favicon.ico" />
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
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap"
        />
      </Helmet>
      <body className="main-bg">
        <div ref={main}>
          <div id="smooth-wrapper">
            <Lines />
            <ProgressScroll />
            <Cursor />
            <LoadingScreen />
            <Navbar />
            <div id="smooth-content">
              <main className="main-bg">
                <BlogDetailHeader />
                <BlogDetailContent />
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}