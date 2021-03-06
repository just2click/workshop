import { Injectable } from '@angular/core';
import { Contact } from '../model/contact.model';
import { BehaviorSubject, observable, Observable, of } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private storageService: StorageService) { }

  private _filterBy$ = new BehaviorSubject({ name: '' })
  public filterBy$ = this._filterBy$.asObservable()

  private _contactsDB: Contact[] = [
    { _id: 'u101', name: 'Avi Kooper', email: 'avi@gmail.com', phone: '+1 (968) 593-3824' },
    { _id: 'u102', name: 'Dominique Soto', email: 'dom@gmail.com', phone: '+1 (968) 593-3345' },
    { _id: 'u103', name: 'Faulkner Flores', email: 'faulflo132@gmail.com', phone: '+1 (968) 593-1234' },
    { _id: 'u104', name: 'Floyd Rutledge', email: 'fr@gmail.com', phone: '+1 (968) 593-3637' },
    { _id: 'u105', name: 'Gienna Santana', email: 'santafanta@gmail.com', phone: '+1 (968) 593-3963' },
    { _id: 'u106', name: 'Grice Janes', email: 'grija@gmail.com', phone: '+1 (968) 593-3846' },
    { _id: 'u107', name: 'Hellie Melean', email: 'hmelen@gmail.com', phone: '+1 (968) 593-3888' },
    { _id: 'u108', name: 'Donald Trump', email: 'trumpFake@gmail.com', phone: '+1 (968) 593-1544' },
    { _id: 'u109', name: 'Bidiyuk Ani', email: 'adina@gmail.com', phone: '+1 (968) 593-9800' },
    { _id: 'u110', name: 'Lo Ani', email: 'loadina@gmail.com', phone: '+1 (968) 593-7587' }
  ]
  private _contacts$ = new BehaviorSubject(this._contactsDB)
  public contacts$ = this._contacts$.asObservable()

  public query() {
    const filterBy = this._filterBy$.getValue()
    this._contactsDB.map(contact => this.storageService.save(contact._id, contact))
    this.storageService.save('contactsDB', this._contactsDB)
    const contacts = this._contactsDB.filter(({ name }) => {
      return name.toLowerCase().includes(filterBy.name.toLowerCase())
    })
    this._contacts$.next(contacts)
  }

  public getById(contactId: string): Observable<Contact> {
    const contact = this._contactsDB.find(contact => contact._id === contactId)
    return contact ? of({ ...contact }) : Observable.throw(`contact id ${contactId} not found`)
  }

  public setFilter(filterBy = { name: '' }) {
    this._filterBy$.next(filterBy)
    this.query()
  }

  public getEmptyContact() {
    return { name: '', email: '', phone: '' }
  }

  public save(contact: Contact) {
    return contact._id ? this._edit(contact) : this._add(contact)
  }

  private _edit(contact: Contact) {
    const contacts = this._contactsDB
    const contactId = contacts.findIndex(_contact => _contact._id === contact._id)
    contacts.splice(contactId, 1, contact)
    this._contacts$.next(contacts)
    this.setFilter()
    return of(contact)
  }

  private _add(contact: Contact) {
    contact._id = this.makeId()
    this._contactsDB.push(contact)
    this._contacts$.next(this._contactsDB)
    this.storageService.save(contact._id, contact)
    this.setFilter()
    return of(contact)
  }

  public removeContact(contactId: string) {
    this._contactsDB = this._contactsDB.filter(contact => contact._id !== contactId)
    this._contacts$.next(this._contactsDB) 
  }

  public makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
