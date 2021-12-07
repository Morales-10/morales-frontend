import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-Morales-BookingSystem-employeepage',
  templateUrl: './employeepage.component.html',
  styleUrls: ['./employeepage.component.scss']
})
export class EmployeepageComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  bookAppointment():void{
    this.router.navigateByUrl('')
  }
  createNewAccount(): void {
    this.router.navigateByUrl('auth/create')

  }

}
