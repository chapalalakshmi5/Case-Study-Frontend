import { Component, OnInit } from '@angular/core';
import { UsersComponent } from '../admin/users/users.component';

import { JwtClientService } from '../jwt-client-service';
import { User } from '../user';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


 

  constructor() { }

  ngOnInit(): void {
  }

  

}
