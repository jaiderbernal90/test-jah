import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListCardsBuildingsComponent } from './components/list-cards-buildings/list-cards-buildings.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { CoreModule } from '../../core/core.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    HomeComponent,
    ListCardsBuildingsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    InfiniteScrollModule,
    CoreModule
  ]
})
export class HomeModule { }
