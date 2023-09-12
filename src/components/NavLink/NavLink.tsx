import { FC } from 'react';

import { NavLinkProps } from './interfaces';
import { NavLink as RouterNavLink } from 'react-router-dom';

const NavLink: FC<NavLinkProps> = ({ text, href, className }) => {
  return (
    <RouterNavLink
      to={href}
      className={({ isActive }) => `
				block w-full text-center ${className}
				${
          isActive
            ? 'font-bold primary--font--color'
            : 'primary--font--color--hover hover:font-bold'
        }
			`}
    >
      {text}
    </RouterNavLink>
  );
};

export default NavLink;
