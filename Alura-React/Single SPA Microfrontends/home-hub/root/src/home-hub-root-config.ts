import { LifeCycles, registerApplication, start } from 'single-spa';

registerApplication({
  name: '@home-hub/react-navbar',
  app: () => System.import<LifeCycles>('@home-hub/react-navbar'),
  activeWhen: ['/'],
});

registerApplication({
  name: '@home-hub/react-dashboard',
  app: () => System.import<LifeCycles>('@home-hub/react-dashboard'),
  activeWhen: (location) => location.pathname === '/',
});

start({
  urlRerouteOnly: true,
});
