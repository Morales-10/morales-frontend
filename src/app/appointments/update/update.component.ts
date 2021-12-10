import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Appointment} from "../shared/appointment-model";
import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentService} from "../shared/appointment-service";
import {forkJoin, map, Observable, of, switchMap, take, tap} from "rxjs";
import {AccountListDto} from "../../auth/shared/account-list-dto";
import {TreatmentList} from "../../treatments/shared/treatment-list.model";
import {AppointmentList} from "../shared/appointment-list.model";
import {AppointmentCreationModle} from "../shared/appointment-creation-modle";
import {AppointmentUpdateDto} from "../shared/appointment-update-dto";

@Component({
  selector: 'app-Morales-BookingSystem-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, AfterViewInit {
  appointmentForm = new FormGroup({
    employeeId: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    treatmentsList: new FormControl('', Validators.required),
    appointmentId: new FormControl('',Validators.required)
  });
  deleteForm = new FormGroup({
    appointmentDeleteId: new FormControl('', Validators.required)
  })
  employees: AccountListDto | undefined;
  treatments: TreatmentList | undefined;
  appointmentToUpdate: Appointment | undefined;


  constructor(private _router: Router,
              private _route : ActivatedRoute,
              private _appointmentService: AppointmentService) { }

  ngOnInit(): void {
    forkJoin([
      this._appointmentService.getEmployees(),
      this._appointmentService.getTreatments()
    ]).pipe(
      tap(([accountList, treatmentList]) => {
        this.employees = accountList;
        this.treatments = treatmentList;
      }),
      take(1)
    ).subscribe();

  }

  ngAfterViewInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    if (id) {
      this._appointmentService.getAppointment(+id)
        .pipe(
          take(1)
        ).subscribe(appointment => {
        this.appointmentToUpdate = appointment;
        this.deleteForm.patchValue({
          appointmentDeleteId: appointment.id
        });
        this.appointmentForm.patchValue({
          date: appointment.date.split('T')[0],
          time: appointment.date.split('T')[1].split('.')[0],
          appointmentId: appointment.id,
          treatmentsList: appointment.treatmentsList.map(at => {
            return this.treatments?.treatmentsList.find(t => t.id == at.id)
          }),
          employeeId: appointment.employeeid,

        });
      });
    }
  }


  updateAppointment() {
    const accountId = localStorage.getItem('accountId')
    const formValues = this.appointmentForm.value;
    if(accountId) {
      const updatedAppointment: AppointmentUpdateDto = {
        customerId: +accountId,
        employeeId: +formValues.employeeId,
        date: formValues.date + ' ' + formValues.time,
        treatmentsList: formValues.treatmentsList,
        appointmentId: formValues.appointmentId,
      }
      this._appointmentService.update(updatedAppointment).subscribe();
    }
  }


  deleteAppointment() {
    const deleteId = this.deleteForm.value;
    this._appointmentService.delete(deleteId.appointmentDeleteId).subscribe();
  }
}
