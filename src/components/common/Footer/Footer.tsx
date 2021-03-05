import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (): React.ReactElement => {
  const navigation = {
    brand: {
      name: 'bigTechnology',
      to: '/',
      mission: 'making your life easier through technology',
    },
    links: [
      {
        name: 'Home',
        to: '/',
      },
      { name: 'Contact Us', to: '/contact' },
      { name: 'Blog', to: '/blog' },
      { name: 'IG', to: '/' },
      { name: 'Twitter', to: '/contact' },
    ],
  };

  return (
    <div className="footer">
      <Link to={navigation.brand.to}>{navigation.brand.name}</Link>
      <p>{navigation.brand.mission}</p>
      <div className="footer-items">
        {navigation.links.map((link, i) => (
          <Link key={i} to={link.to}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
