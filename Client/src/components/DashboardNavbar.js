import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from './Logo';
import { globals } from './CurrentUser';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [isauth, setauth] = useState(false);
  const { logout } = useAuth0();
  useEffect(() => {
    if (globals.User.name !== '') {
      setauth(true);
    }
  }, [globals]);
  return (
    <AppBar elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          {isauth ? (
            <>
              <IconButton onClick={() => logout()} color="inherit">
                <InputIcon />
              </IconButton>
            </>
          ) : (
            <></>
          )}
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
