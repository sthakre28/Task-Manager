import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { UsersService } from '../users.service';
import { Users } from './users.model';

@Component({
  selector: 'app-onwer',
  templateUrl: './onwer.component.html',
  styleUrls: ['./onwer.component.scss']
})
export class OnwerComponent implements OnInit {

  userForm: FormGroup;
  constructor(private http:HttpClient, private usersservice: UsersService) { }
  users: Users[] = [];

  ngOnInit(): void {
    this.usersservice.getUsers().subscribe((response:Users[]) => {
      this.users = response;
      console.log(this.users);
    }
    )
    this.userForm = new FormGroup({
    firstName : new FormControl(null, Validators.required),
    lastName : new FormControl(null, Validators.maxLength(15)),
    // role : new FormControl(null),
    mobile : new FormControl(null, Validators.maxLength(10)),

  });
  }

  // onCreateUser(){
  //   const userData = this.userForm.value;
  //   this.http.post('https://angularp2-dcb84-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',userData).subscribe(response => {
  //     this.users = response;
  //     this.getUsers();
  //   })
  // }

  onCreateUser(){
   let newUser = this.userForm.value;
  this.usersservice.insertUsers(newUser).subscribe(response => 
    {
      console.log(response);
    })
    this.usersservice.getUsers();
  }


  // getUsers(){
  //   this.http.get('https://angularp2-dcb84-default-rtdb.asia-southeast1.firebasedatabase.app/users.json').pipe(map(
  //     (response:any) => {
  //       let users = [];
  //       for (let key in response){
  //         // ...spread operator
  //         users.push({...response[key],key});
  //       }
  //       console.log(users);
  //       return users;

  //     }
  //   ))
  //   .subscribe(response => 
  //   {this.users = response;})
  // }

  // deleteUsers(){
  //   this.http.delete('https://angularp2-dcb84-default-rtdb.asia-southeast1.firebasedatabase.app/users.json').subscribe
  //   (response => {
  //     console.log(response)
  //   })

  // }

  // deleteUsers(key:any){
  //   console.log(key);
  //   this.usersservice.deleteUser(key).subscribe(response => {
  //     // this.getUsers()

  //   })
  // }


  resetForm(){
    this.userForm.reset();
  }
}
