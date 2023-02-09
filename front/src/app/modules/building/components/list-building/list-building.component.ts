import { Component, Input, OnInit } from '@angular/core';
import { BuildingModel } from '../../../../core/interfaces/building';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiRestService } from '../../../../core/services/api-rest.service';

@Component({
  selector: 'app-list-building',
  templateUrl: './list-building.component.html',
  styleUrls: ['./list-building.component.scss']
})
export class ListBuildingComponent implements OnInit {

  @Input() buildingList: BuildingModel[];
  @Input() orderColumn: any;
  @Input() loading: boolean;

  constructor(
    private nzMessageService: NzMessageService,
    private _apirestSvc: ApiRestService,
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.nzMessageService.info('Operación cancelada');
  }

  confirm(id: number): void {
    this._apirestSvc.deleteRequest(`/buildings/${id}`)
      .subscribe(res => {
        this._apirestSvc.requestEvent.emit('deleted')
      })
  }

  beforeConfirm(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }


}
