import React, { useState, useEffect } from 'react';

import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import WifiIcon from '@mui/icons-material/Wifi';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';

import HomeHubLogo from './assets/home-hub.png';

type AuthData = {
  firstName?: string;
  email: string;
  authId: string
}

export default function Root() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [authInfo, setAuthInfo] = useState<AuthData | undefined>();

  useEffect(() => {
    const auth: AuthData = JSON.parse(localStorage.getItem('auth'));
    if (!auth) location.replace('/');
    setAuthInfo(auth);
  }, []);


  const toggleDrawer = (showDrawer: boolean) => () => {
    setIsDrawerOpen(showDrawer);
  };

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    setAuthInfo(undefined);
    localStorage.removeItem('auth');
    location.replace('/');
  }

  const renderDrawer = (
    <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SpaceDashboardIcon />
            </ListItemIcon>
            <ListItemText primary={'Visão geral'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <WifiIcon />
            </ListItemIcon>
            <ListItemText primary={'Dispositivos'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary={'Segurança'} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={'Configurações'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={closeMenu}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem onClick={closeMenu}>{authInfo?.firstName || authInfo?.email || 'Usuário'}</MenuItem>
      <Divider />
      <ListItem disablePadding onClick={closeMenu}>
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={'Configurações'} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding onClick={closeMenu}>
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={'Perfil'} />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding onClick={logout}>
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={'Sair'} />
        </ListItemButton>
      </ListItem>
    </Menu>
  );

  return (
    <div id="single-spa-application:react-navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#9C27B0' }}>
          <Toolbar>
            <MenuItem onClick={toggleDrawer(true)}>
              <img src={HomeHubLogo} style={{ width: '176px' }} />
            </MenuItem>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <MenuItem onClick={openMenu}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </MenuItem>
              <IconButton
                size="large"
                color="inherit"
              >
                <NotificationsIcon />
              </IconButton>
            </Box>
          </Toolbar>
          <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
            {renderDrawer}
          </Drawer>
          {renderMenu}
        </AppBar>
      </Box>
    </div>
  );
}
