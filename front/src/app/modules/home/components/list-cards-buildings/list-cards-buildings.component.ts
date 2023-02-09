import { Component, Input, OnInit } from '@angular/core';
import { BuildingModel } from 'src/app/core/interfaces/building';

@Component({
  selector: 'app-list-cards-buildings',
  templateUrl: './list-cards-buildings.component.html',
  styleUrls: ['./list-cards-buildings.component.scss']
})
export class ListCardsBuildingsComponent implements OnInit {
  @Input() building: BuildingModel;
  @Input() loading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
