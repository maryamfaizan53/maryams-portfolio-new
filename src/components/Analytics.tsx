
import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Simple page view tracking
    const trackPageView = () => {
      console.log('Page view tracked:', {
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer
      });
    };

    // Track page view on component mount
    trackPageView();

    // Track scroll depth
    let maxScrollDepth = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        
        // Track milestone scroll depths
        if (maxScrollDepth >= 25 && maxScrollDepth < 50) {
          console.log('Scroll depth: 25%');
        } else if (maxScrollDepth >= 50 && maxScrollDepth < 75) {
          console.log('Scroll depth: 50%');
        } else if (maxScrollDepth >= 75 && maxScrollDepth < 90) {
          console.log('Scroll depth: 75%');
        } else if (maxScrollDepth >= 90) {
          console.log('Scroll depth: 90%');
        }
      }
    };

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      console.log('Time on page:', timeSpent, 'seconds');
    };

    window.addEventListener('scroll', trackScrollDepth);
    window.addEventListener('beforeunload', trackTimeOnPage);

    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
      window.removeEventListener('beforeunload', trackTimeOnPage);
    };
  }, []);

  return null;
};

export default Analytics;
