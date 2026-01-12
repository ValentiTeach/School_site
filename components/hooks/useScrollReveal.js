// useScrollReveal.js - JavaScript hook for scroll animations
import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    };
    
    // Initial check
    revealOnScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', revealOnScroll);
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);
}

// Utility function for smooth scrolling
export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Animation delay calculator
export function getStaggerDelay(index, baseDelay = 100) {
  return `${index * baseDelay}ms`;
}
