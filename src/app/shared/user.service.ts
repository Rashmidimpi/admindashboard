import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Customer interface
export class Customer {
  name: String;
  mobilenumber: Number;
  email_id: String;
  college_name: String;
  college_id_number: Number;
  profession: String;
  dob: String;
  active_status: String;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  // addCustomer(data: Customer): Observable<any> {
  //   return this.http.post('http://127.0.0.1:8000/api/addUser', data);
  // }
  
  getCustomer(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/getuser');
  }

  updateCustomer(updateId,updateData) {
    console.log('data',updateData);
    console.log('Id',updateId);
   
    let id=updateId;
    let data= {
      "id": updateId,
      "active_status": updateData,
    }
    
    return this.http.post('http://127.0.0.1:8000/api/updatestatus/',data);    
  }

 
}
