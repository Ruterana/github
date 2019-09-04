import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component'

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

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DateCountPipe } from './date-count.pipe';
import { UserFormComponent } from './user-form/user-form.component';
import { UpperCasePipe } from './upper-case.pipe';
import { StrikethroughDirective } from './strikethrough.directive';
import { GithDirective } from './gith.directive';

// import { DateCountPipe } from './date-count.pipe';
@NgModule({
 declarations: [
   AppComponent,
   ProfileComponent,
   DateCountPipe,
   UserFormComponent,
   UpperCasePipe,
   StrikethroughDirective,
   GithDirective,
  //  DateCountPipe,
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   HttpClientModule,
   FormsModule
  //  AppComponent,
 
 ],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule { }
