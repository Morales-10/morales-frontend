import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Appointment} from "../shared/appointment-model";
import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentService} from "../shared/appointment-service";

@Component({
  selector: 'app-Morales-BookingSystem-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  appointmentForm = new FormGroup({
    name: new FormControl('',Validators.required)
  });

  appointmentToUpdate: Appointment | undefined;

  constructor(private _router: Router,
              private _route : ActivatedRoute,
              private _appointmentService: AppointmentService) { }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    if (id){
      this._appointmentService.getAppointment(+id)
        .subscribe(appointment => {
          this.appointmentToUpdate = appointment;
          this.appointmentForm.patchValue(appointment);
        });
    }
  }

  update(){
    if (this.appointmentToUpdate) {
      let appointment = this.appointmentForm.value as Appointment;
      appointment.id = this.appointmentToUpdate.id;
      this._appointmentService.update(appointment)
        .subscribe(appointment => {
          this._router.navigateByUrl('appointment');
        });
    }
  }

}
