import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
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
      this.router.navigateByUrl('/')
    } catch (err) {
      this.router.navigateByUrl('/signup')
    }
  }
  
  async getRate() {
    this.rate = await this.bitcoinService.getRate(this.val)
  }
}
