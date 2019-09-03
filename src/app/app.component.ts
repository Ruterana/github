// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'github';
// }

import { Component, OnInit } from '@angular/core';
import { User } from './user';
// import { GithubComponent } from 'github/github.component';
import { UserServiceService } from "./services/user-service.service";
import { Repository } from './repository';
// import { AppComponent } from './app.component';
// import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
 selector: 'app-github',
 templateUrl: './github.component.html',
 styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
 repoService: UserServiceService;
 title = 'Github';
 user: User;
 repos: Repository[];
 constructor(private githubService: UserServiceService,private router:ActivatedRoute) {
   // this.user = this.githubService.user;
 }
 ngOnInit() {
   // this.githubService.getProfileInfo(name)
   // this.repoService.getRepoInfo(name)
   let id = this.router.snapshot.paramMap.get("id");
   this.githubService.getProfileInfo(id)
   this.user = this.githubService.user
   this.repos = this.githubService.repo
 }
}
