import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/coupon';
import { FormGroup, FormBuilder} from '@angular/forms';
import Swal from 'sweetalert2';
import { AdminService } from 'src/app/admin.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  coupons!:Coupon[];
  
  formValue!: FormGroup
  productModelObject: Coupon = new Coupon;
  showAdd!: boolean;
  showBtn!: boolean;
  api: any;
  allproductData: any;
  
  constructor(private formBuilder: FormBuilder, private adminService:AdminService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group(
      {
     
        databaseid: [''],
        availcoupons: [''],
       image:[''],
        code: [''],
        discount: [''],
        createdDate: [''],
        lastModifiedDate: ['']
        
      }
    )
    this.getCoupon();
    
  }
  clickAddCoupon()
  {
    this.formValue.reset();
    this.showAdd=true;
    this.showBtn=false;
  }
getCoupon(){
  this.adminService.getAllCoupon().subscribe((coupons: Coupon[])=> {
    console.log(coupons);
    this.coupons=coupons;
  });
}
  //subscribe
  addCoupon() {
    this.productModelObject.databaseid=this.formValue.value.databaseid;
    this.productModelObject.availcoupons= this.formValue.value.availcoupons;
    this.productModelObject.image= this.formValue.value.image;
    this.productModelObject.code=this.formValue.value.code;
    this.productModelObject.discount = this.formValue.value.discount;
    this.productModelObject.createdDate = this.formValue.value.createdDate;
    this.productModelObject.lastModifiedDate = this.formValue.value.lastModifiedDate;
    

    this.adminService.addCoupon(this.productModelObject).subscribe((res:any)=>{
      console.log(res);
      Swal.fire(
        "Product Added",
        "Successfully",
        "success"
      )
      this.formValue.reset();
      this.getCoupon();
    }
    )
  }


 

  //delete
  deleteCoupon(Coupon:any)
  {
    this.adminService.deleteCoupon(Coupon.databaseid).subscribe((res:any[])=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })
      this.getCoupon();
    })
  }

  //edit
  onEditCoupon(Coupon:any)
  {
    this.showAdd=false;
    this.showBtn=true;
    this.productModelObject.databaseid = Coupon.databaseid;
    this.formValue.controls['availcoupons'].setValue(Coupon.availcoupons);
    this.formValue.controls['image'].setValue(Coupon.image);
    this.formValue.controls['code'].setValue(Coupon.code);
    this.formValue.controls['discount'].setValue(Coupon.discount);
    this.formValue.controls['createdDate'].setValue(Coupon.createdDate);
    this.formValue.controls['lastModifiedDate'].setValue(Coupon.lastModifiedDate);
  }

  updateCoupon()
  {
    this.productModelObject.availcoupons = this.formValue.value.availcoupons;
    this.productModelObject.image = this.formValue.value.image;
    
    
    this.productModelObject.code = this.formValue.value.code;
    this.productModelObject.discount = this.formValue.value.discount;
    this.productModelObject.createdDate = this.formValue.value.createdDate;
    this.productModelObject.lastModifiedDate = this.formValue.value.lastModifiedDate;
   

    this.adminService.updateCoupon( this.productModelObject.databaseid,this.productModelObject)
    .subscribe((res:any[])=>{
      Swal.fire(
        "Product Updated",
        "Successfully",
        "success"
      )
      this.getCoupon();
    }

    );
  }
}
