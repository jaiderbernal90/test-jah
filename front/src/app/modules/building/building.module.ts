import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingRoutingModule } from './building-routing.module';
import { BuildingComponent } from './pages/building/building.component';
import { AddBuildingComponent } from './pages/add-building/add-building.component';
import { ListBuildingComponent } from './components/list-building/list-building.component';
import { FormBuildingComponent } from './components/form-building/form-building.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [
    BuildingComponent,
    AddBuildingComponent,
    ListBuildingComponent,
    FormBuildingComponent
  ],
  imports: [
    CommonModule,
    BuildingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    CoreModule
  ]
})
export class BuildingModule { }
