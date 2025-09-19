import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";
import BlogGrid3Columns from './pages/blog-grid-3columns';
import HomePersonal from './pages/home-personal.js';
import Page404 from './pages/page-404.js';
import PageAbout from './pages/page-about.js';
import PageContact from './pages/page-contact.js';
import PageFAQ from './pages/page-FAQ.js';
import PageServices from './pages/page-services.js';
import PageProcess from './pages/page-process.js';
import PageTools from './pages/page-tools.js';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

// gsap.registerPlugin(ScrollTrigger);
// gsap.config({ trialWarn: false });
function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<HomePersonal />} />
  <Route path="/blog-grid-3column" element={<BlogGrid3Columns />} />
  <Route path="/blog" element={<BlogGrid3Columns />} />
  <Route path="/home-personal" element={<Navigate to="/" replace />} />
        <Route path="/page-404" element={<Page404 />} />
        <Route path="/page-about" element={<PageAbout />} />
        <Route path="/page-contact" element={<PageContact />} />
        <Route path="/page-FAQ" element={<PageFAQ />} />
        <Route path="/page-services" element={<PageServices />} />
        <Route path="/page-process" element={<PageProcess />} />
        <Route path="/page-tools" element={<PageTools />} />

        {/*        
        {/*
         */}
  <Route path="*" element={<Page404 />} />
      </Routes>
      <SpeedInsights />
    </Router>
  );
}

export default App;
