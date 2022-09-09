import { Component, Inject, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { User } from 'src/app/user';
import { Router ,ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup,FormBuilder, Validators, NgControlStatus} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { DataSource } from '@angular/cdk/table';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  user: User = new User();
  submitted = false;
  hide = true;
  id!:string;

  actionbtn:string="Save";

  userform!:FormGroup;

//userForm!=FormGroup;
  constructor(private adminService: AdminService,private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData:any,private route:ActivatedRoute,
    private router: Router,private diaologRef:MatDialogRef<AddUserComponent>) { }

  ngOnInit() :void {

    // this.user = new User();

    // this.id = this.route.snapshot.params['id'];
    
    // this.adminService.getUser(this.id)
    //   .subscribe(data => {
    //     console.log(data)
    //     this.employee = data;
    //   }, error => console.log(error));
  
    this.userform=this.formBuilder.group({
      
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required]
    });
    console.log(this.editData);
    if(this.editData)
     {
  
     this.actionbtn="Update";
    // this.userform.controls['id'].setValue(this.editData.firstname)
    this.userform.controls['firstname'].setValue(this.editData.firstname);
    this.userform.controls['lastname'].setValue(this.editData.lastname);
    this.userform.controls['password'].setValue(this.editData.password);
    this.userform.controls['email'].setValue(this.editData.email);
    }
  }
  
// adduser()
// {
//   if(this.editData)
//   {
//     if(this.userform.valid){

//     }
//     else{
//       this.updateUser()
//     }
//   }
// }

  // updateUser()
  // {
  //    this.adminService.updateUser(this.id,this.user)
  //    .subscribe(data=>{
  //     console.log(data);
  //     this.user=data;
  //        alert("product updated successfully");
  //        this.userform.reset();
  //        this.diaologRef.close('update');
  //      },
  //      error=>
  //        alert("Error while updaqting the record"));
  //      }
     
    
  



  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.adminService
    .createUser(this.user).subscribe(data => {
      console.log(data)
      this.user= new User();
      this.gotoList();
    }, 
    error => console.log(error));
    if(this.editData){
      if(this.userform.valid){}
    }
    else{
      //this.updateUser()

      }
    }
    
  


 

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/listusers']);
  }
}


