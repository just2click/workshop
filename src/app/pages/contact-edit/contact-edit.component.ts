import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  @Input() contact: Contact
  @Input() isAtEdit = true
  subscription: Subscription

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact ? data.contact : this.contactService.getEmptyContact()
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onSubmitForm(value: any) {
    this.contactService.save({ ...this.contact })
    this.contactService.setFilter()
    this.isAtEdit = false
    setTimeout(() => this.router.navigateByUrl('/contact'), 2000)
  }

  removeContact() {
    this.contactService.removeContact(this.contact._id)
    setTimeout(() => this.router.navigateByUrl('/contact'), 2000)
  }

  onGoToDetails() {
    this.router.navigateByUrl(this.contact._id ? `/contact/${this.contact._id}` : '/contact')
  }
}
