// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { GithubFormComponent } from './github-form/github-form.component';
// import { ProfileComponent } from './profile/profile.component'

// @NgModule({
//   declarations: [
//     AppComponent,
//     GithubFormComponent,
//     ProfileComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { profile } from '../app/profile/profile.component';
// import { githubform} from './githubform';
import { GithubForm} from '../app/github-form/github-form.component';
import { HttpClientModule } from '@angular/common/http';
// import { DateCountPipe } from './date-count.pipe';
@NgModule({
 declarations: [
  //  AppComponent,
  //  profile,
   GithubForm,
  //  GithubFormComponent,
  //  DateCountPipe,
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   FormsModule,
   HttpClientModule,
  //  AppComponent,
 
 ],
 providers: [],
//  bootstrap: [AppComponent],
})
export class AppModule { }
