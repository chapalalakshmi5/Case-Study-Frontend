import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { Company } from 'src/app/company';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  company: Company = new Company();
  submitted = false;
  hide = true;
  id!:string;

  actionbtn:string="Save";

  companyform!:FormGroup;

  constructor(private adminService: AdminService,private formBuilder:FormBuilder,
  private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }




  newUser(): void {
    this.submitted = false;
    this.company = new Company();
  }

  save() {
    this.adminService
    .addCompany(this.company).subscribe(data => {
      console.log(data)
      this.company= new Company();
      this.gotoList();
    });
  }
    //error => console.log(error));
  
    // if(this.editData){
    //   if(this.userform.valid){}
    // }
    // else{
    //   //this.updateUser()

    //   }
     
    
  


 

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/productlist']);
  }
}



