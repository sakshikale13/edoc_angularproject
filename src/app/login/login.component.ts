import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CookieService } from '../cookie.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;

  constructor(private api: ApiService, private cookie: CookieService, private router:Router) {

  }



  ngOnInit(): void {
    this.user = new FormGroup({
      email: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))
   

})

}
submit = (user: any) => {
// this.router.navigate(["/admin/dashboard"]);
let apiurl="authentication/login";
let data = this.api.post(apiurl,
  {data:user 
  });
  data.subscribe((mydata:any)=>{
  console.log(mydata);
  // console.log(data);

  if(mydata.data.status=="success"){
    this.cookie.set("usertype","admin");
    this.cookie.set("authkey",mydata.data.authkey);
     this.router.navigate(["/admin/dashboard"]);

  }
  else{
    alert("invalid email or password")
  }
  });
  
  
}
}

