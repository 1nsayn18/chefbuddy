import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
} from 'react-feather';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import NavItem from './NavItem';

export default function SidebarItems() {
  const [presItems, setpresItems] = useState([]);

  const { isAuthenticated } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      setpresItems([
        {
          href: '/app/dashboard',
          icon: BarChartIcon,
          title: 'Dashboard'
        },
        {
          href: '/app/dishes',
          icon: ShoppingBagIcon,
          title: 'Edit Dishes'
        },
        {
          href: '/app/account',
          icon: UserIcon,
          title: 'Account'
        },
        {
          href: '/app/settings',
          icon: SettingsIcon,
          title: 'Settings'
        },
        {
          href: '/logout',
          icon: ExitToAppRoundedIcon,
          title: 'Log out'
        }
      ]);
    } else {
      setpresItems([
        {
          href: '/login',
          icon: LockIcon,
          title: 'Sign In',
        }
      ]);
    }
  }, []);

  return (
    <div>
      {presItems.map((item) => (
        <NavItem
          href={item.href}
          key={item.title}
          title={item.title}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
