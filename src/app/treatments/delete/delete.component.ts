import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TreatmentService} from "../shared/treatment.service";
import {Treatment} from "../shared/treatment-model";

@Component({
  selector: 'app-Morales-BookingSystem-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  treatmentForm = new FormGroup({
    id: new FormControl('', Validators.required)
  });
  constructor(private _route : ActivatedRoute,
              private _router : Router,
              private _treatmentService : TreatmentService) { }

  ngOnInit(): void {
  }

  delete(){
    let treatment = this.treatmentForm.value as Treatment;
    this._treatmentService.delete(treatment)
      .subscribe(treatment => {
        this._router.navigateByUrl('treatments');
      });
  }
}
