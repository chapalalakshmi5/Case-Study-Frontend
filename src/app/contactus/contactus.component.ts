import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  send()
  {
    Swal.fire({

     text: "MessageSent Successfully",

    

        confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok"
      
    })
  }

}
