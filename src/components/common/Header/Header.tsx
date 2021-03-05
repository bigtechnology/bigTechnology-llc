import React from 'react';
import { Link } from 'react-router-dom';

const Header = (): React.ReactElement => {
  const navigation = {
    brand: { name: 'bigTechnology', to: '/' },
    links: [
      { name: 'Home', to: '/' },
      { name: 'Contact Us', to: '/contact' },
      { name: 'Blog', to: '/blog' },
    ],
  };

  return (
    <div className="header">
      <Link to={navigation.brand.to}>{navigation.brand.name}</Link>
      <div className="header-items">
        {navigation.links.map((link, i) => (
          <Link key={i} to={link.to}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
