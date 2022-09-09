import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
