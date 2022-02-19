import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cookie:CookieService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.cookie.delete("usertype");
    this.cookie.delete("name");
    this.cookie.delete("authkey");
    this.router.navigate(["/"]);
  }
  redirect(path:string){
    alert(path);
    this.router.navigate([path]);
  }

}
