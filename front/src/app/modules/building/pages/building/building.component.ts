import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { BuildingModel } from 'src/app/core/interfaces/building';
import { ApiRestService } from 'src/app/core/services/api-rest.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit, OnDestroy {

  listSubscribers: Subscription[] = [];
  loading: boolean = false;
  limit: number = 10;
  orderColumn = [
      {
          title: 'Titulo',
      },
      {
          title: 'Tipo de inmuble',
      },
      {
          title: 'Descripción',
      },
      {
        title: 'Area (m2)'
      },
      {
        title: '# Habitaciones',
      },
      {
          title: '# Baños',
      },
      {
          title: '# Parqueaderos',
      },
      {
          title: 'Valor',
      },
      {
        title: '',
      },
  ]
  page: number = 1;
  term:string = '';
  totalItems:number;
  buildingList:BuildingModel[];
  searchInput: any;
  
  constructor( 
    private _apirestSvc:ApiRestService,
  ){}

  ngOnInit(): void {
    this.listenObserver();
    this.getBuilding();
  }

  // ---------------------------------------------------------------------
  // ----------------------------GET DATA---------------------------------
  // ---------------------------------------------------------------------
  private getBuilding():void {
    this.loading = true;

    const query = [
      `?page=${this.page - 1}`,
      `&term=${this.term}`,
      `&limit=${this.limit}`,
    ].join('');

    this._apirestSvc.getRequest(`/buildings${query}`)
      .pipe(finalize( () => this.loading = false))
      .subscribe((res: any) => {
          const { rows, count } = res;

          this.buildingList = rows;
          this.totalItems = count;
        })
  }

  // ---------------------------------------------------------------------
  // ------------------------PAGINATION AND FILTERS-----------------------
  // ---------------------------------------------------------------------
  public search(): void {
      this.term = this.searchInput;
      this.getBuilding()
  }

  public pageIndexChanged(page:number):void {
    this.page = page; 
    this.getBuilding();
  }

  public pageSizeChanged(limit: number):void {
      this.limit = limit; this.page = 0;
      this.getBuilding();
  }

  private listenObserver = () => {
    const observer1$ = this._apirestSvc.requestEvent.subscribe((res) => {
      this.getBuilding();
    });

    this.listSubscribers = [observer1$];
  }
  
  ngOnDestroy(): void {
    this.listSubscribers.map(a => a.unsubscribe());
  }

}
