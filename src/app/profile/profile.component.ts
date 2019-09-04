import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',

  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( ) {}

  
  ngOnInit() {
  }

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






  