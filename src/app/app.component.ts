import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, private userService: UserService) { }

  title = 'workshop';


  async ngOnInit() {
    const user = await this.userService.getUser()
  }
}
