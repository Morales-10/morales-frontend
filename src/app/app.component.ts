import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginUser} from "./auth/shared/login-user.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MoralesBookingSystem';


  constructor(private router: Router,
              ) {
  }

}
