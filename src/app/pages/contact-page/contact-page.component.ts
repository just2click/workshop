import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  @Input() isAtHome: boolean

  constructor(private contactService: ContactService) { }
  contacts: Contact[] = []
  subscription: Subscription
  selectedContactId: string = null
  isAtEdit = false
  ngOnInit(): void {

    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }



}
