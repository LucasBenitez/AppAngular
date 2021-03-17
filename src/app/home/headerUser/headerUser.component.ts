import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-headerUser',
  templateUrl: './headerUser.component.html',

})
export class HeaderUserComponent implements OnInit {
  constructor(private cookies: CookieService, public router: Router) {}


  ngOnInit(): void {
  }
  logout(): void{
    this.cookies.delete("token");
    this.router.navigate(['/login']);
  }
}
