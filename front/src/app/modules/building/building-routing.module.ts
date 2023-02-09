import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingComponent } from './pages/building/building.component';
import { AddBuildingComponent } from './pages/add-building/add-building.component';

const routes: Routes = [
  {
    path: '',
    component: BuildingComponent,
  },
  {
    path: 'crear',
    component: AddBuildingComponent,
    data: {
      title: 'Crear'
    }
  },
  {
    path: 'editar/:id',
    component: AddBuildingComponent,
    data: {
      title: 'Editar'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingRoutingModule { }
