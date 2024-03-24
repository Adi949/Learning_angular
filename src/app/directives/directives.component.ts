import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Courses } from '../interfaces/courses';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from '../popup/popup.component';
import { Observable } from 'rxjs';
import { ObsService } from '../obs.service';


@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule,FormsModule,PopupComponent],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})

export class DirectivesComponent {


@Input() data:string=""

CopyText: string="";
isLoggedIn:boolean=false
heading:boolean= true
title :string='Built-in-directives'
popup:boolean=false
courses :Courses[]= [
    {
   'name': "dfssd",
   'level': 'Beginner'
 },
 {
   'name': 'Understanding APIs',
   'level': 'Intermediate'
 },
 {
   'name': 'Introduction to Docker Containers',
   'level': 'Advanced'
 },
 {
   'name': 'Understanding Time complexities',
   'level': 'Advanced'
 },
 {
   'name': 'Algorithms and Data Structures',
   'level': 'Advanced'
 },
 {
   'name': 'My first HTML page',
   'level': 'Beginner'
 },
 {
   'name': 'Ways to use CSS in your web page',
   'level': 'Beginner'
 },
 {
   'name': 'Introduction to Unit testing',
   'level': 'Intermediate'
 },
 {
   'name': 'What are PWAs',
   'level': 'Intermediate'
 }
 ];


keyValue ={
  c: 123,
  b: 456,
  a: 789

}


show():void{
 
console.log(this.popup)
 this.popup=true
 }

  constructor(private obs: ObsService) {}

 users$?: Observable<string[]>;
  newUser: string = '';


  ngOnInit(): void {
    this.users$ = this.obs.users$;
  }

  addUser(): void {
    this.obs.addUser(this.newUser);
    this.newUser = '';
  }

  deleteUser(user: string): void {
    this.obs.deleteUser(user);
  }

 


  receiveData(data: boolean) {
    this.popup = data;
    console.log('popup value form parent',this.popup)
  }



    

  
}




