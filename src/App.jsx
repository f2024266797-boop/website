import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import TrustAndPeople from './components/TrustAndPeople'
import Testimonials from './components/Testimonials'
import CaseStudies from './components/CaseStudies'
import WayOfBuilding from './components/WayOfBuilding'
import DesignApproach from './components/DesignApproach'
import TechStack from './components/TechStack'
import DevelopmentProcess from './components/DevelopmentProcess'
import FeaturedResources from './components/FeaturedResources'
import CTA from './components/CTA'
import AboutPage from './components/AboutPage'
import ServicesPage from './components/ServicesPage'
import BlogPage from './components/BlogPage'
import ProjectsPage from './components/ProjectsPage'
import ContactPage from './components/ContactPage'
import AdminPage from './components/AdminPage'
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

    setTimeout(() => {
      const targets = document.querySelectorAll(
        'section h2, section h4, .case-card, .way-row, .approach-card, .cta-card, .footer-col-1, .footer-col-2, .footer-col-3, .footer-col-4'
      )
      targets.forEach((el) => {
        el.classList.add('scroll-reveal')
        observer.observe(el)
      })
    }, 450)

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      observer.disconnect()
    }
  }, [])

  const path = window.location.pathname;

  const renderCurrentPage = () => {
    if (path === '/about') return <AboutPage />
    if (path === '/services') return <ServicesPage />
    if (path === '/blog') return <BlogPage />
    if (path === '/projects') return <ProjectsPage />
    if (path === '/contact') return <ContactPage />
    if (path === '/admin') return <AdminPage />
    
    return (
      <div className="main-wrapper">
        <Hero />
        <Services />
        <TrustAndPeople />
        <Testimonials />
        <CaseStudies />
        <WayOfBuilding />
        <DesignApproach />
        <TechStack />
        <DevelopmentProcess />
        <FeaturedResources />
        <CTA />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-[100vw]">
      <style>{`
        .scroll-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.85s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* DEFINITIVE GLOBAL NAVBAR (V106) */}
      {path !== '/admin' && <Navbar />}
      
      {renderCurrentPage()}
      
    </div>
  );
}

export default App
