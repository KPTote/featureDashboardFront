import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FeatureConfigComponent } from './dashboard/feature-config/feature-config.component';
import { dashboardGuard } from './dashboard/guard/dashboard.guard';
import { featureConfigGuard } from './dashboard/guard/feature-config.guard';
import { logListResolver } from './dashboard/resolvers/log-list.resolver';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {logList: logListResolver},
    canActivate: [dashboardGuard]
  },
    {
    path: 'feature-config',
    component: FeatureConfigComponent,
    canActivate: [featureConfigGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
