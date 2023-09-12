import { useContext } from 'react';
import { UIContext } from '@/context/ui';
import NavLink from '../NavLink/NavLink';

import {
  Navbar,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
} from '@nextui-org/react';

import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { Link } from 'react-router-dom';

const items = [
  { to: '/', text: 'Home' },
  { to: '/teams', text: 'Teams' },
  { to: '/games', text: 'Games' },
];

const Nav = () => {
  const { isNavMenuOpen, setNavMenuOpen, setTheme, currentTheme } =
    useContext(UIContext);

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      isMenuOpen={isNavMenuOpen}
      onMenuOpenChange={setNavMenuOpen}
      maxWidth='xl'
      isBlurred={false}
    >
      <NavbarBrand>
				<Link to='/'>
					<img
						src='/logo.png'
						alt='logo'
						width={100}
						height={0}
						className='h-auto'
					/>
				</Link>
      </NavbarBrand>
      <NavbarContent className='hidden md:flex' justify='center'>
        {items.map(({ to, text }, index) => (
          <NavbarItem key={`${index}-${to}`}>
            <NavLink
              className='text-xl'
              text={text}
              href={to}
              aria-current='page'
            />
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <ThemeSwitch setTheme={setTheme} currentTheme={currentTheme} />
        </NavbarItem>
        <NavbarMenuToggle
          className='nav__menu sm:hidden'
          aria-label={isNavMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarMenu>
        {items.map(({ to, text }, index) => (
          <NavbarItem key={`${index}-${to}`}>
            <NavLink
              className='text-2xl'
              text={text}
              href={to}
              aria-current='page'
            />
          </NavbarItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
