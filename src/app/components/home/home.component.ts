import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users$ = this.userService.getUsers();

  constructor(private userService: UsersService) {}

  ngOnInit() {}
}
