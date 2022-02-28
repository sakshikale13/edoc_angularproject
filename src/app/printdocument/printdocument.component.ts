import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-printdocument',
  templateUrl: './printdocument.component.html',
  styleUrls: ['./printdocument.component.css']
})
export class PrintdocumentComponent implements OnInit {

  employee: any;
  document: any;
  words:any;
  documentid:string | null = "";
  employeeid:string | null = "";
  content:string = "";

  constructor(private api:ApiService, private cookie: CookieService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.employeeid = this.activatedRoute.snapshot.paramMap.get("eid");
    this.documentid = this.activatedRoute.snapshot.paramMap.get("did");
    
    let apiurl = "words/list";
    let data = this.api.post(apiurl, {});
    data.subscribe((mydata: any) => {
      this.words = mydata.data;
    });

    apiurl = "documents/get";
    data = this.api.post(apiurl, { data: { id: this.documentid } });
    data.subscribe((mydata: any) => {
      this.document = mydata.data;    
      console.log(this.document);
    });

    apiurl = "employees/get";
    data = this.api.post(apiurl, { data: { id: this.employeeid } });
    data.subscribe((mydata: any) => {
        this.employee = mydata.data;      
        console.log(this.employee);
        if(this.employee.gender == "Male")
        {
          this.content = this.document.malecontents;
        }
        else{
          this.content = this.document.femalecontents;
        }       
      });
  }

  change() {
    this.words.forEach((word:any) => {
      let replacewith = "";
      if(word.replacewith == "name"){
        replacewith = this.employee.name;
      }
      else if(word.replacewith == "joiningdate"){
        replacewith = this.employee.joiningdate;
      }
      else if(word.replacewith == "relievingdate"){
        replacewith = this.employee.relievingdate;
      }
      console.log(word);
      this.content.replace(word.keyword, replacewith);
    });
  }
}
