import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccessEnum } from '../enums/access-params.enum';

export const dashboardGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const param = sessionStorage.getItem(AccessEnum.Dashboard);

  if(param !== AccessEnum.DashboardParam){
    router.navigate(['/']);
    sessionStorage.clear();
    return false;
  }

  return true;
};
