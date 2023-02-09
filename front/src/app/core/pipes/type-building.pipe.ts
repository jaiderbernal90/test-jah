import { Pipe, PipeTransform } from '@angular/core';
import { TypeBuildingService } from '../../shared/services/type-building.service';
import { TypeBuilding } from '../interfaces/type-building';

@Pipe({
  name: 'typeBuilding'
})
export class TypeBuildingPipe implements PipeTransform {

  constructor(
    private _typesBuildingSvc:TypeBuildingService
  ){

  }
  typesBuilding:TypeBuilding[] = this._typesBuildingSvc.getTypes();

  transform(value: string): string | number {
    return (this.typesBuilding.filter( a => a.value === value)[0])?.label;
  }

}
