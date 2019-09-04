// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-profile',

//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {

//   constructor( ) {}

  
//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import {User}from '../user';
import {HttpClient} from '@angular/common/http';
import {HttpRequestService}from '../repos-request/http-request.service'
import { Repository } from '../repository';
@Component({
 selector: 'app-user-profile',
 templateUrl: './user-profile.component.html',
 providers:[HttpRequestService],
 styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 Users:User;
 repos:Repository;
 addNew(user){
   this.reposRequest.reposRequest(user)
   this.repos=this.reposRequest.repos
   this.Users= new User(user.name)
}
 constructor(private reposRequest:HttpRequestService) {
   this.Users= new User("");
   this.repos=new Repository(0,0,0,new Date(),"","");
 }
 ngOnInit() {
 }












// import { Component, OnInit} from '@angular/core';
// import { UserRequestService } from '../user-http/user-request.service';

// import { User } from '../user';
// import { Repository } from '../repository';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   providers: [UserRequestService],
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   user:User;
//   arrayRepo:Repository[];

//   constructor(private userService: UserRequestService) {}

//   getResponse(username) {
//     this.userService.userRequest(username);
//     this.user = this.userService.user;
//     this.user.showRepos = false;

//     console.log("Got User Response");
//     console.log(this.user);

//     this.userService.repoRequest(username);
//     this.arrayRepo = this.userService.arrayRepo;
//   }

//   getRepos() {
//     // this.userService.repoRequest(username);
//     this.arrayRepo = this.userService.arrayRepo;

//     console.log("Got Repos Response");
//     console.log(this.arrayRepo);

//   }
//   toggleRepos(){
//     this.user.showRepos = !this.user.showRepos;
//     console.log("Toggle Repos");
//   }

//   ngOnInit() {
//   }

// }






  