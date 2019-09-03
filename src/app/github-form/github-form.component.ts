

import { Component, OnInit,Output,EventEmitter } from '@angular/core';
// import { UserServiceService } from "../services/user-service.service";
import{User} from '../user';
// import { Reporsitory } from '../reporsitory';
import { Router } from '@angular/router'
@Component({
  selector: 'app-github-form', 
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubForm implements OnInit {
  username="Ruterana";
  @Output() addUser=new EventEmitter<any>();
 submitUser(){
   this.addUser.emit(this.username);
 }
   
 
 constructor( ) {}
 ngOnInit() {
   this.submitUser();
 }
}
