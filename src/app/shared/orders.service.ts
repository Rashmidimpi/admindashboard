import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Product interface
export class Customer {
  name: String;
  category: String;
  seller: String;
  listed_on: String;
  no_of_people_interested: Number;
  action: String;
}


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  updateStatus(updateId,updateData) {
    console.log('data',updateData);
    console.log('productid',updateId);
   
    let id=updateId;
    let data= {
      "productid": updateId,
      "is_delete": updateData,
    }
    
    return this.http.post('http://127.0.0.1:8000/api/status/',data);    
  }

}
