import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
	user: User;

	constructor(public userService:UserService) { }
  
	ngOnInit(): void {
		this.getUser();
	}
  
	getUser(){
	  this.userService.getMainUser().subscribe(user =>{
		this.user = user;
	  });
	  }
}
