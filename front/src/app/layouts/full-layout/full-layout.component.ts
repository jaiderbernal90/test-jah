import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../shared/components/components.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavInterface } from '../../core/interfaces/nav';
import { ROUTES } from './nav-routes.config';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class FullLayoutComponent implements OnInit {

  itemsNav: NavInterface[] = ROUTES;

  constructor() { }

  ngOnInit(): void {
  }

}
