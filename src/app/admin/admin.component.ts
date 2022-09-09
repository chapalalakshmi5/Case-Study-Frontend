import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { JwtClientService } from '../jwt-client-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public loggedIn=false;

  constructor(private service:JwtClientService) { 


  }

  ngOnInit(): void {

    this.loggedIn=this.service.isLoggedIn()
  }

  logoutUser()
  {
    Swal.fire({

      title: "Are you sure?",
  
      text: "You want to logout",
  
      icon: "warning",
  
      showCancelButton: true,
  
      confirmButtonColor: "#3085d6",
  
      cancelButtonColor: "#d33",
  
      confirmButtonText: "Yes, logout it!"
  
    })
    this.service.logout();
    location.reload()
    window.location.href="login"
  }
  

}



