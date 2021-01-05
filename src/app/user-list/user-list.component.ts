import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'mobilenumber', 'email_id', 'college_name','college_id_number','profession','dob','active_status', 'action'];
  dataSource = new MatTableDataSource();
  datalist = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService) { }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {

    this.getCustomerList();
  }

  getCustomerList() {
    this.userService.getCustomer().subscribe((res) => {

      console.log(res);
      this.datalist = res;
      this.dataSource = new MatTableDataSource(res);;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }

  
  

  updateCustomer(id, data) {
    console.log(data);
    this.userService.updateCustomer(id,data).subscribe((res) => {
      alert("user updated");
      this.getCustomerList();
    })

  }
}
