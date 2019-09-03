import { Component, OnInit } from '@angular/core';
// import{UserServiceService } from '../services/user-service.service';
// import { User } from '../user';

import {Repository} from '../repository';
@Component({
  selector: 'app-profile',
  providers:[UserServiceService ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:User;
arryRepository:Repository[];
username:string;
  constructor( private userservice: UserServiceService) {}
  getResponse(username) {
    console.log("Got User Response");
    console.log(this.user);

    this.userService.repository(username);
    this.user = this.userService.user;
    this.user.showRepository = false;
    this.arrayRepository = this.userService.arrayRepository;
  }
  getRepository() {
    // this.userService.repoRequest(username);
    this.arrayRepository = this.userService.arrayRepo;

    console.log("Got Repos Response");
    console.log(this.arrayRepository);

  }
  toggleRepos(){
    this.user.showRepos = !this.user.showRepos;
    console.log("Toggle Repos");
  }
  ngOnInit() {
  }

}






  