import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[] = []
  @Input() isAtEdit: boolean
  @Output() onSelectContact = new EventEmitter()
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
