import React from 'react';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const navMenu = [
  { href: '/login', text: 'Log in' },
  { href: '/register', text: 'Registration' },
];

const ItemMenu = styled(NavLink)`
  &.active {
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`;

const AppBar = () => {
  const isLoggenIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <div className={css.header}>
      {isLoggenIn ? (
        <UserMenu />
      ) : (
        <div className={css.navList}>
          {navMenu.map(({ href, text }) => (
            <ItemMenu className={css.navLink} to={href} key={href} end>
              {text}
            </ItemMenu>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppBar;
