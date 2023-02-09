import { Injectable } from '@angular/core';
import { TypeBuilding } from '../../core/interfaces/type-building';

@Injectable({
  providedIn: 'root'
})
export class TypeBuildingService {

  constructor() { }

  public typesBuilding:TypeBuilding[] = [
    { value: 'aparment', label: 'Apartamento'},
    { value: 'house', label: 'Casa'},
    { value: 'lot', label: 'Lote'},
    { value: 'studio-apartment', label: 'Apartaestudio'}
  ]

  public getTypes():TypeBuilding[]{ return this.typesBuilding }

}
