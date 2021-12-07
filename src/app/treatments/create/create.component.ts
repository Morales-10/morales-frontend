import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TreatmentService} from "../shared/treatment.service";
import {Treatment} from "../shared/treatment-model";

@Component({
  selector: 'app-Morales-BookingSystem-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  treatmentForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(private _router: Router,
              private _route : ActivatedRoute,
              private _treatmentService: TreatmentService,) { }

  ngOnInit(): void {
  }
  create(){
    let treatment= this.treatmentForm.value as Treatment;
    this._treatmentService.create(treatment)
      .subscribe(treatment => {
        this._router.navigateByUrl('treatments');
      });
  }

}
