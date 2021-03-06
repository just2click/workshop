import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/model/contact.model';
import { User } from 'src/app/model/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(private conatctService: ContactService, private router: Router, private route: ActivatedRoute, private userService: UserService) { }
  @Input() contactId: string
  @Input() isAtEdit = false
  subscription: Subscription
  contact: Contact
  user: User
  amount: number
  specMoves: any
  ngOnInit() {
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact
    })
    this.loadUser()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  async loadUser() {
    this.user = await this.userService.getUser()
    this.getSpesificMoves()
  }

  goToEdit() {
    this.isAtEdit = true
  }

  getSpesificMoves() {
    this.specMoves = this.user.moves.filter(move => move.to === this.contact.name)
  }

  onGoToContacts() {
    this.router.navigateByUrl('/contact')
  }
  
  onTransfer() {
    this.userService.doMove(this.contact, this.amount)
    setTimeout(() => this.router.navigateByUrl('/'), 1500)
  }

}
