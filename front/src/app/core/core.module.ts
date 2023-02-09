import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeBuildingPipe } from './pipes/type-building.pipe';



@NgModule({
  declarations: [
    TypeBuildingPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TypeBuildingPipe
  ]
})
export class CoreModule { }
