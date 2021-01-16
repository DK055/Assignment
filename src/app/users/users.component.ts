import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  
  //If all the users are removed from the users array then there will be a error shown
  // but no user available template is showing perfectly fine
  
  users = [
    {
      name: "Kavish Gupta",
      email: "kavish.gupta@abc.com",
      username: "DK"
    },
    {
      name: "ABC Verma",
      email: "abc@gmail.com",
      username: "AB"
    },
    {
      name: "Reynma",
      email: "reynma@gmail.com",
      username: "Jemtt"
    },
    {
      name: "Rajat Jain",
      email: "rain@gmail.com",
      username: "RaiN"
    },
    {
      name: "Abhishek Singh",
      email: "sx@gmail.com",
      username: "sX"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
