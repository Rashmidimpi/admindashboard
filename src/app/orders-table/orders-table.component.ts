import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { OrdersTableDataSource, OrdersTableItem } from './orders-table-datasource';
import { OrdersService} from 'src/app/shared/orders.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements  OnInit {
 
  // @ViewChild(MatTable) table: MatTable<OrdersTableItem>;
  // dataSource: OrdersTableDataSource;

  

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['product_name', 'category','seller','listed_on','no_of_people_interested','action'];
  dataSource = new MatTableDataSource();
  datalist = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private OrdersService : OrdersService) { }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    // this.dataSource = new OrdersTableDataSource();
    this.getOrderList();
  }

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  //   this.table.dataSource = this.dataSource;
  // }

  getOrderList() {
    this.OrdersService.getOrderList().subscribe((res) => {

      console.log(res);
      this.datalist = res;
      this.dataSource = new MatTableDataSource(res);
      console.log(res[0].product_name);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
      this.dataSource.sort = this.sort;

    })
  }

  updateStatus(id, data) {
    console.log(data);
    this.OrdersService.updateStatus(id,data).subscribe((res) => {
      alert("Status updated");
      this.getOrderList();
    })

  }
}
