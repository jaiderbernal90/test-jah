import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiRestService } from '../../../../core/services/api-rest.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-form-building',
  templateUrl: './form-building.component.html',
  styleUrls: ['./form-building.component.scss']
})
export class FormBuildingComponent implements OnInit {
  @Input() id: number;

  form: UntypedFormGroup;
  loading: boolean;
  typesBuilding = [
    { value: 'aparment', label: 'Apartamento'},
    { value: 'house', label: 'Casa'},
    { value: 'lot', label: 'Lote'},
    { value: 'studio-apartment', label: 'Apartaestudio'}
  ]

  constructor(
    private fb: FormBuilder,
    private _apirestSvc: ApiRestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      type: [null, [Validators.required]],
      description: [null, [Validators.required, Validators.maxLength(500)]],
      title: [null, [Validators.required, Validators.maxLength(255)]],
      area: [null, [Validators.required, Validators.maxLength(11)]],
      num_toilets: [null, [Validators.required, Validators.maxLength(11)]],
      num_rooms: [null, [Validators.required, Validators.maxLength(11)]],
      num_parking: [null, [Validators.required, Validators.maxLength(11)]],
      price: [null, [Validators.required, Validators.maxLength(20)]],
    });

    if (this.id) this.getBuilding()
  }

  public submit(): void {
    this.loading = true;

    let path = this.id ? `/buildings/${this.id}` : `/buildings/create`;

    let request = !this.id ? this._apirestSvc.postRequest(path, this.form.value) : this._apirestSvc.putRequest(path, this.form.value) ;
    
    request.pipe(finalize(() => this.loading = false))
      .subscribe((res: any) => {
        const { success } = res;
        if (success) {
          this.router.navigate(['/', 'inmuebles']);
        }
      })
  }

  //------------------------------------------------------------------------
  //-------------------------------GET DATA---------------------------------
  //------------------------------------------------------------------------
  public getBuilding() {
    this._apirestSvc.getRequest(`/buildings/${this.id}`).subscribe((res: any) => {
      const { data } = res;
      this.form.patchValue(data);
    })
  }


}
