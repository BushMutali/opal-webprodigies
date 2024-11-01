import React from 'react';
import Link from 'next/link';
import { FaTwitch, FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaGlobe } from 'react-icons/fa';

const platformMap: { [key: string]: { icon: React.ElementType; baseUrl: string } } = {
  'twitch.tv': { icon: FaTwitch, baseUrl: 'https://www.twitch.tv/' },
  'instagram.com': { icon: FaInstagram, baseUrl: 'https://www.instagram.com/' },
  'twitter.com': { icon: FaTwitter, baseUrl: 'https://www.twitter.com/' },
  'facebook.com': { icon: FaFacebook, baseUrl: 'https://www.facebook.com/' },
  'youtube.com': { icon: FaYoutube, baseUrl: 'https://www.youtube.com/' },
};

export const parseTextWithLinks = (text: string): JSX.Element => {
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;

  const renderLinkWithIcon = (url: string, index: number) => {
    let platformIcon: React.ElementType = FaGlobe;
    let usernameOrPath = url;

    Object.keys(platformMap).forEach((domain) => {
      if (url.includes(domain)) {
        platformIcon = platformMap[domain].icon;
        usernameOrPath = url.split(domain + '/')[1] || url;
      }
    });

    const formattedUrl = url.startsWith("www.") ? `https://${url}` : url;

    return (
      <Link key={index} href={formattedUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-[#333333] px-1 rounded hover:bg-[#E1D9D1] duration-200 hover:text-[#111111]">
        {React.createElement(platformIcon, { className: 'inline-block' })}
        <span>{usernameOrPath}</span>
      </Link>
    );
  };

  const parts = text.split(urlRegex).map((part, index) => {
    const isUrl = urlRegex.test(part);
    return isUrl ? renderLinkWithIcon(part, index) : <span key={index}>{part}</span>;
  });

  return <>{parts}</>;
};
