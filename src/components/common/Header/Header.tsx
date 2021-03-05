import React, { useMemo, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

const Header = (): React.ReactElement => {
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = useMemo<headerItems[]>(() => {
    const navItems = [{ link: '/', text: 'Home' }];
    return navItems;
  }, []);
  const toggleMenu = () => {
    setShowMenu((cur) => !cur);
  };
  return (
    <>
      <header>
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <MdMenu
          className={menuItems.length <= 0 ? 'hidden' : ''}
          onClick={toggleMenu}
        />
      </header>
      <div className="menu-container">
        <div className={`nav-menu${showMenu ? '' : 'hidden'}`}>
          {menuItems.map((item, i) => {
            <MenuItem
              key={i}
              {...item}
              clickHandler={() => setShowMenu(false)}
            />;
          })}
        </div>
      </div>
    </>
  );
};

const MenuItem = (props: MenuItemProps) => {
  return (
    <div className={`menu-item${props.primary ? ' primary' : ''}`}>
      <NavLink
        exact
        to={props.link}
        onClick={props.clickHandler}
        activeClassName="active"
      >
        {props.text}
      </NavLink>
    </div>
  );
};

interface MenuItemProps {
  link: string;
  text: string;
  primary?: boolean;
  clickHandler?: () => void | null;
}

type headerItems = {
  link: string;
  text: string;
};

export default Header;
