import React from 'react';
import { Link } from 'react-router-dom';
import { navigation } from './footerItems';

const Footer = (): React.ReactElement => {
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
      <div> &copy; All Rights Reserved bigTechnology L.L.C. </div>
    </div>
  );
};

export default Footer;
