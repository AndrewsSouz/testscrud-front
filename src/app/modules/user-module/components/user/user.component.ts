
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../../../shared/models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

user = {} as User;
users: User[] = [];
p: number = 1;
count: number = 5;
key: string  = "";

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      (users: User[])  => this.users = users);
  }

}
