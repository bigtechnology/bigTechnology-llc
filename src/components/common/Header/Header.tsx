import React from 'react';
import { Link } from 'react-router-dom';
import { navigation } from './headerItems';

const Header = (): React.ReactElement => {
  return (
    <div className="header">
      <Link className="header-brand" to={navigation.brand.to}>
        {navigation.brand.name}
      </Link>
      <div className="header-items">
        {navigation.links.map((link, i) => (
          <Link className="header-links" key={i} to={link.to}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
