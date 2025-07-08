import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccessEnum } from '../enums/access-params.enum';

export const featureConfigGuard: CanActivateFn = (route, state) => {

    const router = inject(Router);

    const param = sessionStorage.getItem(AccessEnum.FeatureConfig);

    if(param !== AccessEnum.FeatureConfigParam){
      router.navigate(['/dashboard']);
      return false;
    }

    return true;
};
