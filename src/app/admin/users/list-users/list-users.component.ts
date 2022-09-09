import { Component, Inject, OnInit,ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/admin.service';
import { User } from 'src/app/user';
import { Router ,ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users!: User[];

  //&put details
  id!:string;
  user!:User;

  userobjectmodel: User=new User;

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'password','email','action'];
  dataSource=new MatTableDataSource<User>(this.users);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  color = 'orangered'
 

  //&constructor for user list service
  constructor(private adminService: AdminService,private router: Router,private route:ActivatedRoute,private dialog:MatDialog
   ) {
     
    }
 
    
    ngOnInit() {
      this.reloadData();

    
   
}
    reloadData() {
      let resp=this.adminService.getUsersList();
     
      resp.subscribe(report=>this.dataSource.data=report as User[])


      this.user = new User();

      this.id = this.route.snapshot.params['id'];
      
      // this.adminService.getUser('id')
      //   .subscribe(data => {
      //     console.log(data)
      //     this.user = data;
      //   }, error => console.log(error));
    }
    
      // this.users = this.adminService.getUsersList();
      // this.dataSource=new MatTableDataSource();
      // this.dataSource.paginator=this.paginator;
      // this.dataSource.sort=this.sort
    
  
    deleteUser(id:string) {
      this.adminService.deleteUser(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  
    // userDetails(id: string){
    //   this.router.navigate(['viewuser', id]);
    // }
  
    // updateUser(id: string){
    //   this.router.navigate(['updateuser', id]);
    // } 

//&update(put) user data
    editData(row:any){
      this.dialog.open(AddUserComponent,{
        data:{
        width:'30%',
        data:row
        
      }
    })
    }
   

    // updateUser(id:string) {
    //   this.dialog.open(AddUserComponent)
    //   this.adminService.updateUser(id, this.user)
    //     .subscribe(data => {
    //       console.log(data);
    //       this.user = new User();
    //       this.gotoList();
    //     }, error => console.log(error));
    // }

   

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    gotoList() {
      this.router.navigate(['/listusers']);
    }

    
  openDialog() {
    const dialogRef = this.dialog.open(AddUserComponent);
    

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


 

  }