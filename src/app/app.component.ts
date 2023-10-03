import { Component } from '@angular/core';
import {User} from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  topics=['angular','react','vue'];
  userModel = new User('sri','sri@test.com' ,556666, 'angular' , 'morning',true);
  
}
