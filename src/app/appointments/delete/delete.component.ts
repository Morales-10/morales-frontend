import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentService} from "../shared/appointment-service";
import {Appointment} from "../shared/appointment-model";

@Component({
  selector: 'app-Morales-BookingSystem-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  appointmentForm = new FormGroup({
    id: new FormControl('', Validators.required)
  });


  constructor(private _router : Router,
              private _route : ActivatedRoute,
              private _appointmentService: AppointmentService) { }

  ngOnInit(): void {
  }

  delete(){
  }
}
