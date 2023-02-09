import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.scss']
})
export class AddBuildingComponent implements OnInit {
  id:number;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { 
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'] ?? '';
    });
  }
  
  ngOnInit(): void { }

}
