import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

export const logListResolver: ResolveFn<boolean> = (route, state) => {

  return inject(DashboardService).getData();



};
