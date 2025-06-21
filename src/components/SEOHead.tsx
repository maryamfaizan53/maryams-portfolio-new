
import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Maryam Faizan - AI & Full-Stack Developer Portfolio",
  description = "Professional AI and Full-Stack Developer specializing in React, Next.js, Python, and Machine Learning. View my portfolio of innovative web applications and AI solutions.",
  keywords = "AI developer, full-stack developer, React, Next.js, Python, machine learning, web development, portfolio, Maryam Faizan",
  image = "/portfolio.png",
  url = "https://eac281b6-743e-4fbc-adbf-63ad231eae05.lovableproject.com"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          (meta as HTMLMetaElement).setAttribute('property', name);
        } else {
          (meta as HTMLMetaElement).setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      (meta as HTMLMetaElement).setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Maryam Faizan');
    updateMetaTag('robots', 'index, follow');

    // Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', url);
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:site_name', 'Maryam Faizan Portfolio');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Additional SEO tags
    updateMetaTag('theme-color', '#8B5CF6');
    updateMetaTag('msapplication-TileColor', '#8B5CF6');

    // Structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Maryam Faizan",
      "jobTitle": "AI & Full-Stack Developer",
      "description": description,
      "url": url,
      "image": image,
      "sameAs": [
        "https://github.com/maryamfaizan53",
        "https://linkedin.com/in/maryamfaizan"
      ],
      "knowsAbout": [
        "Artificial Intelligence",
        "Machine Learning",
        "Full-Stack Development",
        "React",
        "Next.js",
        "Python",
        "TypeScript"
      ]
    };

    // Update or create structured data script
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, url]);

  return null;
};

export default SEOHead;
