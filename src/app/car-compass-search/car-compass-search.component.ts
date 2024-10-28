import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarCompassSearchService } from '../Services/car-compass-search-service.service';
import { CommonRequest, GetAllMakesModel, apiType } from '../Models/models';

@Component({
  selector: 'app-car-compass-search',
  templateUrl: './car-compass-search.component.html',
  styleUrls: ['./car-compass-search.component.css']
})

export class CarCompassSearchComponent implements OnInit {

  rows = 10;
  lstAllMakesModel: GetAllMakesModel[] = [];
  form: FormGroup;
  objRequest = new CommonRequest(); 
  showMakeIdField: boolean = false;
  showModelIdField: boolean = false;
  callAllMakes: boolean = false;
  callVehicleTypesForMakeId: boolean = false;
  callModelsForMakeIdYear: boolean = false;

  constructor(private fb: FormBuilder,
    private service: CarCompassSearchService) {
    this.form = this.fb.group({
      selectedApi: null,
      make: null,
      modelYear: null
    });
  }

  apis: any[] = [
    { name: 'Get All Makes', key: '1' },
    { name: 'Get Vehicle Types For MakeId', key: '2' },
    { name: 'Get Models For MakeId Year', key: '3' }
  ];

  ngOnInit() {
    this.bindEvents();
  }

  bindEvents() {
    const searchForm = (<any>this.form).controls;
    const selectedApiChange$ = searchForm.selectedApi.valueChanges;

    selectedApiChange$.subscribe((change: any) => {
      if (change) {
        switch (change.key) {
          case apiType.getAllMakes.toString():
            {
              this.showMakeIdField = false;
              this.showModelIdField = false;

              this.callAllMakes = true;
              this.callVehicleTypesForMakeId = false;
              this.callModelsForMakeIdYear = false;
              this.form.patchValue({ make: null, modelYear: null });

              this.lstAllMakesModel = [];
            }
            break;
          case apiType.getVehicleTypesForMakeId.toString():
            {
              this.showMakeIdField = true;
              this.showModelIdField = false;

              this.callAllMakes = false;
              this.callVehicleTypesForMakeId = true;
              this.callModelsForMakeIdYear = false;
              this.lstAllMakesModel = [];
              this.form.patchValue({ make: null, modelYear: null });
            }
            break;
          case apiType.getModelsForMakeIdYear.toString():
            {
              this.showMakeIdField = true;
              this.showModelIdField = true;

              this.callAllMakes = false;
              this.callVehicleTypesForMakeId = false;
              this.callModelsForMakeIdYear = true;
              this.lstAllMakesModel = [];
              this.form.patchValue({ make: null, modelYear: null })
            }
            break;
        }
      }
    });

  }

  GetAllMakes() {
    this.objRequest.format = "json";
    this.service.GetAllMakes(this.objRequest).subscribe((res) => {
      this.lstAllMakesModel = res.results;
      console.log('All Makes Model:', res.results);
    });
  }

  GetVehicleTypesForMakeId() {
    const searchForm = (<any>this.form).controls;
    this.objRequest.format = "json";
    this.objRequest.makeId = searchForm.make.value;
    this.service.GetVehicleTypesForMakeId(this.objRequest).subscribe((res) => {
      this.lstAllMakesModel = res.results;
      console.log('Get Vehicle Types For MakeId:', res.results);
    });
  }

  GetModelsForMakeIdYear() {
    const searchForm = (<any>this.form).controls;
    this.objRequest.format = "json";
    this.objRequest.makeId = searchForm.make.value;
    this.objRequest.modelyear = searchForm.modelYear.value;
    this.service.GetModelsForMakeIdYear(this.objRequest).subscribe((res) => {
      this.lstAllMakesModel = res.results;
      console.log('Get Models For MakeId Year:', res.results);
    });
  }

  onSubmit() {
    if (this.callAllMakes) {
      this.GetAllMakes();
    }

    if (this.callVehicleTypesForMakeId) {
      this.GetVehicleTypesForMakeId();
    }

    if (this.callModelsForMakeIdYear) {
      this.GetModelsForMakeIdYear();
    }
  }
} 
