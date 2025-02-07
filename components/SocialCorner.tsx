import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar, SiOrcid } from "react-icons/si";

const SocialCorner = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Google Scholar',
      icon: <SiGooglescholar />,
      url: 'https://scholar.google.com/yourid',
      color: 'hover:text-blue-400'
    },
    {
      name: 'ORCID',
      icon: <SiOrcid />,
      url: 'https://orcid.org/0000-0003-2083-5585',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`transform transition-all duration-200 text-white/70 
            hover:scale-110 ${social.color} text-2xl sm:text-3xl
            hover:-translate-y-1`}
          title={social.name}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialCorner;