import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Treatment} from "../shared/treatment-model";
import {ActivatedRoute, Router} from "@angular/router";
import {TreatmentService} from "../shared/treatment.service";

@Component({
  selector: 'app-Morales-BookingSystem-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  treatmentForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });
  treatmentToUpdate : Treatment| undefined;

  constructor(private _route: ActivatedRoute,
              private _router : Router,
              private _treatmentService: TreatmentService) { }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    if(id) {
      this._treatmentService.getTreatment(+id)
        .subscribe(treatment => {
          this.treatmentToUpdate = treatment;
          this.treatmentForm.patchValue(treatment);
        });
    }
  }

  update(){
    if( this.treatmentToUpdate){
      let treatment = this.treatmentForm.value as Treatment;
      treatment.id = this.treatmentToUpdate.id;
      this._treatmentService.update(treatment)
        .subscribe(treatment => {
          this._router.navigateByUrl('treatments');
        });
    }
  }

}
