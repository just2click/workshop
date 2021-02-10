import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { User } from 'src/app/model/contact.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  // @Input() isAtHome: boolean
  constructor(private router: Router, private userService: UserService, private bitcoinService: BitcoinService) { }
  user: any
  rate: number
  val = 1
  ngOnInit(): void {
    this.loadUser()
    this.getRate()
  }
  async loadUser() {
    try {
      this.user = await this.userService.getUser()
      console.log(this.user);
      this.router.navigateByUrl('/')
    } catch (err) {
      this.router.navigateByUrl('/signup')
    }
  }
  async getRate() {
    this.rate = await this.bitcoinService.getRate(this.val)
    console.log('rate:', this.rate);

  }
}
