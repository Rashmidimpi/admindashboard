import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Product interface
export class Product {
  product_name: String;
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

  getOrderList(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/orderlist');
  }

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
