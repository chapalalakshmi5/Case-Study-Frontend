import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { Company } from 'src/app/company';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  companies!: Company[];

//   //&put details
   id!:string;
   company!:Company;
  

  companyobjectmodel: Company=new Company;

  displayedColumns: string[] = ['id', 'comname', 'categories','image','action'];
  dataSource=new MatTableDataSource<Company>(this.companies);





  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  color = 'orangered'

  constructor(private adminService: AdminService,private router: Router,private route:ActivatedRoute,private dialog:MatDialog) { }

  ngOnInit() {
    this.reloadData();

  
 
}
  reloadData() {
    let resp=this.adminService.getAllCompany();
   
    resp.subscribe(report=>this.dataSource.data=report as Company[])


    this.company= new Company();

    this.id = this.route.snapshot.params['id'];
    
//     // this.adminService.getUser('id')
//     //   .subscribe(data => {
//     //     console.log(data)
//     //     this.user = data;
//     //   }, error => console.log(error));
  }

  deleteCompany(id:string) {
    this.adminService.deleteCompany(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
   editData(row:any){
      this.dialog.open(ProductComponent,{
        data:{
        width:'30%',
        data:row
        
      }
    })
    }



  applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();

        }      }
 }
