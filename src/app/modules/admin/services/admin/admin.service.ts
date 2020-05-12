import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Admin } from '../../models/admin/admin';

@Injectable({
  providedIn: 'root'
})
<<<<<<< Updated upstream
export class AdminService {
	getAdmin(): Observable<Admin>{
		let admin :Admin = new Admin ('Admin Simon', 100000);
		return of(admin)
	  }
=======
export class UserService {

  getUser(): Observable<Admin[]>{
    let users :Admin[] = [new Admin ('Luis', '123', 'luis@gmail.com', 500000),
                         ]
    return of(users)
  }
>>>>>>> Stashed changes

  constructor() { }
}
