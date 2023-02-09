import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../../../core/services/api-rest.service';
import { finalize } from 'rxjs';
import { BuildingModel } from 'src/app/core/interfaces/building';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = false;
  limit: number = 10;
  page: number = 1;
  term: string = '';
  buildingList: BuildingModel[] = [];
  totalItems: number;

  constructor(
    private _apirestSvc: ApiRestService,
  ) { }

  ngOnInit(): void {
    this.getBuilding();
  }

  private getBuilding(): void {
    this.loading = true;

    const query = [
      `?page=${this.page - 1}`,
      `&term=${this.term}`,
      `&limit=${this.limit}`,
    ].join('');

    this._apirestSvc.getRequest(`/buildings${query}`)
      .pipe(finalize(() => this.loading = false))
      .subscribe((res: any) => {
        const { rows, count } = res;

        this.buildingList = [...this.buildingList, ...rows];
        this.totalItems = count;
      })
  }

  onScroll(){

    if(this.buildingList && this.buildingList.length == this.totalItems) return

    this.page++;
    this.getBuilding();
  }

}
