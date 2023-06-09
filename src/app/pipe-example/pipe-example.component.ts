import { Component, OnInit } from "@angular/core";
import { User } from "./user";
import { Observable, timer } from "rxjs";
import { map, startWith, takeWhile, finalize } from "rxjs/operators";

@Component({
  selector: "app-pipe-example",
  templateUrl: "./pipe-example.component.html",
  styleUrls: ["./pipe-example.component.css"]
})
export class PipeExampleComponent implements OnInit {
  now = "2020-06-24T09:00:00.000Z";
  userId = "4321245";
  userIdChangeAfterFiveSeconds = "14324";

  users: User[] = [
    {
      name: "Huong Phan",
      age: 30
    },
    {
      name: "Huong2 Vo",
      age: 28
    },
    {
      name: "Huong3 Tran",
      age: 29
    },
    {
      name: "Huong4 Anh",
      age: 16
    }
  ];

  time$: Observable<number> = timer(0, 1000).pipe(
    map(val => 5 - (val + 1)),
    startWith(5),
    finalize(() =>{
      this.userIdChangeAfterFiveSeconds = "";
    }),
    takeWhile(val => val >= 0)
  );

  newUser: User;

  constructor() {
    this.newUser = new User();
  }

  ngOnInit() {
  }

  addUser() {
    this.users.push(this.newUser);
    this.newUser = new User();
  }

  addUserByUpdateReference() {
    this.users = [...this.users, this.newUser];
    this.newUser = new User();
  }
}
