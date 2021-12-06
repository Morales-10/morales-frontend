import { Component, OnInit } from '@angular/core';
import {Treatment} from "../shared/treatment-model";
import {TreatmentService} from "../shared/treatment.service";

@Component({
  selector: 'app-Morales-BookingSystem-treatment-list',
  templateUrl: './treatment-list.component.html',
  styleUrls: ['./treatment-list.component.scss']
})
export class TreatmentListComponent implements OnInit {
  treatments: Treatment[] = [];

  constructor( private treatmentService: TreatmentService,
               ) { }

  ngOnInit() {
    this.getTreatments();
  }

  getTreatments():void {
    this.treatmentService.getTreatments()
      .subscribe(treatments =>this.treatments = treatments);

  }
}
