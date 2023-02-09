import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardsBuildingsComponent } from './list-cards-buildings.component';

describe('ListCardsBuildingsComponent', () => {
  let component: ListCardsBuildingsComponent;
  let fixture: ComponentFixture<ListCardsBuildingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCardsBuildingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCardsBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
