import React from 'react';
import { Route, IndexRoute } from 'react-router';

import IndexPage from './layouts/IndexPage';
import NetworkingPage from './layouts/NetworkingPage';
import BackupsPage from './layouts/BackupsPage';
import RescuePage from './layouts/RescuePage';
import DashboardPage from './layouts/DashboardPage';
import SettingsPage from './settings';

export default (
  <Route path=":linodeId" component={IndexPage}>
    <IndexRoute component={DashboardPage} />
    <Route path="networking" component={NetworkingPage} />
    <Route path="rebuild" component={() => <p>TODO</p>} />
    <Route path="resize" component={() => <p>TODO</p>} />
    <Route path="rescue" component={RescuePage} />
    <Route path="backups" component={BackupsPage} />
    {SettingsPage}
  </Route>
);
