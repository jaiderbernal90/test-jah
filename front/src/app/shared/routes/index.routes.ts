import { Routes } from '@angular/router';

export const ROUTES: Routes = [

    {
        path: 'inicio',
        loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule),
    },
    // Building
    {
        path: 'inmuebles',
        loadChildren: () => import('../../modules/building/building.module').then(m => m.BuildingModule),
    },


];