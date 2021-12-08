import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentService} from "../shared/appointment-service";
import {Appointment} from "../shared/appointment-model";


@Component({
  selector: 'app-Morales-BookingSystem-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  appointmentForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(private _router : Router,
              private _appointmentService : AppointmentService,
              private _route :ActivatedRoute) { }

  ngOnInit(): void {
  }

  create(){
    let appointment = this.appointmentForm.value as Appointment;
    this._appointmentService.create(appointment)
      .subscribe(appointment => {
        this._router.navigateByUrl('employee')
      })
  }

}
