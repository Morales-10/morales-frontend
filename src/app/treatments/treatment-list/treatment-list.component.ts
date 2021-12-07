import { Component, OnInit } from '@angular/core';
import {Treatment} from "../shared/treatment-model";
import {TreatmentService} from "../shared/treatment.service";
import {Observable} from "rxjs";
import {TreatmentList} from "../shared/treatment-list.model";

@Component({
  selector: 'app-Morales-BookingSystem-treatment-list',
  templateUrl: './treatment-list.component.html',
  styleUrls: ['./treatment-list.component.scss']
})
export class TreatmentListComponent implements OnInit {
  treatments$ : Observable<TreatmentList> | undefined

  constructor( private treatmentService: TreatmentService,
               ) { }

  ngOnInit() {
    this.treatments$ = this.treatmentService.getTreatments();
  }

}
