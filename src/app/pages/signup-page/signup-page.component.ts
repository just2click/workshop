import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor(private userService: UserService, private contactService: ContactService, private router: Router) { }
  name: string = ''
  ngOnInit(): void {
  }
  onSubmitName() {
    this.userService.signup(this.name)
    this.router.navigateByUrl('/')
  }
}
