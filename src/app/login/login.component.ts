import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { JwtClientService } from '../jwt-client-service';
import Swal from 'sweetalert2';

import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';
import { map, tap } from 'rxjs/operators';

import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 //*registering user deatils
//user: User=new User({ id: "", username: "", email: "", password: "" });

//user: User=new User("","","","")
//*login 
 authenticationRequest:any={
    "username":"",
    "password":"",
    
   
  };
  

  surveyForm!: FormGroup;
  submitted= false;

  response:any;

//*this is for declaring toggle password 
  public showPassword: boolean = false;

 
 constructor(private service:JwtClientService,private  formBuilder: FormBuilder,private router:Router) { }


 
  onSubmit():void
 {
   //console.log("form is submitted");
   if((this.authenticationRequest.username=="admin1" && this.authenticationRequest.password=="admin1"))
   {
     window.location.href="/admin";

   }
   else
   {
    Swal.fire({
      text:"please enter valid details",
       icon: "warning",
   
       showCancelButton: true,
   
       confirmButtonColor: "#3085d6",
   
       cancelButtonColor: "#d33",
   
       confirmButtonText: "Ok"

     })


   }




   if((this.authenticationRequest.username=="company" && this.authenticationRequest.password=="company"))
   {
     window.location.href="/company";

  }
   else
   {
    Swal.fire({
      text:"please enter valid details",
       icon: "warning",
   
       showCancelButton: true,
   
       confirmButtonColor: "#3085d6",
   
       cancelButtonColor: "#d33",
   
       confirmButtonText: "Ok"

     })


   }
    
   if((this.authenticationRequest.username!=''&& this.authenticationRequest.password!='')&&(this.authenticationRequest.username!=null && this.authenticationRequest.password!=null))
   {
     console.log("we have to submit the form");

     this.service.authenticateClient(this.authenticationRequest)
     .subscribe((data:any)=>
      {
        
        console.log(data);
       
       // localStorage.setItem('token',data)
     
       this.service.loginUser(data)
       if(this.service.isLoggedIn()==true)
       {
        Swal.fire(

          "Authenticated",
  
          "Successfully",
  
          "success"
  
        )
       
      window.location.href="/customer"
       }
       else
       {
         //alert("please enter valid details");
         Swal.fire({
          text:"please enter valid details",
           icon: "warning",
       
           showCancelButton: true,
       
           confirmButtonColor: "#3085d6",
       
           cancelButtonColor: "#d33",
       
           confirmButtonText: "Ok"
    
         })

       }
      },
      (error:any)=>
       {
         console.log(error);
       }
       
       );
   }
   else
   {
     alert("Fileds are empty!!");
   }

  
  }
  ngOnInit(): void {
      
  }


//*togglepassword method declaration
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  

 

 

// ngOnInit() {
//    this.authenticateClient1(this.authenticationRequest);
//   this.surveyForm = this.formBuilder.group({
//      fName: ['',Validators.required]
//     });
//  }

// public authenticateClient1(authenticationRequest1:any){
//  let resp=this.service.authenticateClient1(authenticationRequest1);
//  resp.subscribe(data=>console.log("Token: "+data));
// //  window.location.href="/admin";

//  }
// public authenticateClient1(authenticationRequest1:any){
//    let resp=this.service.authenticateClient1(authenticationRequest1);
//    resp.subscribe(data=>this.accessapi(data));
// }


// public accessapi(generatedToken:any){
//   let resp=this.service.testingToken(generatedToken);
//   resp.subscribe(data=>this.response=data);

// }
}


 
 //name = new FormControl('');
 //get f() { return this.surveyForm.controls; }
 
  
 
  /*onSubmit() {
  this.submitted = true;
 
 // stop here if form is invalid
 if (this.surveyForm.invalid) {
     return;
 }
 
 // display form values on success
 alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.surveyForm.value, null, 4));
 }*/
 /*onReset() {
  this.submitted = false;
  this.surveyForm.reset();
  }*/
