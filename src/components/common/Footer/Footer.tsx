import React from 'react';
import { Link } from 'react-router-dom';
import { navigation } from './footerItems';

const Footer = (): React.ReactElement => {
  return (
    <>
      <div className="footer">
        <div className="footer-mission">
          <Link className="footer-brand" to={navigation.brand.to}>
            {navigation.brand.name}
          </Link>
          <p className="mission">{navigation.brand.mission}</p>
        </div>

        <div className="footer-items">
          <p>Quick Links</p>
          {navigation.links.map((link, i) => (
            <Link className="footer-links" key={i} to={link.to}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="footer-copyrights">
        {' '}
        &copy; All Rights Reserved bigTechnology L.L.C.{' '}
      </div>
    </>
  );
};

export default Footer;
