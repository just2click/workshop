import { Injectable } from '@angular/core';
import { Move } from '../model/move.model';
import { User } from '../model/user.model';
import { ContactService } from './contact.service';
import { StorageService } from './storage.service';

const KeyUser = 'userDB'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storageService: StorageService, private contactService: ContactService) { }

  user: User = null

  getUser() {
    const user = localStorage.getItem(KeyUser)
    if (!user) return Promise.reject('no user')
    this.user = JSON.parse(user)
    return Promise.resolve(this.user)
  }

  signup(name: string) {
    const user = new User(name, 100, []) 
    user.name = name
    user._id = this.contactService.makeId()
    this.user = user
    this._saveUser()
    return user
  }

  doMove(contact: any, amount: any) {
    const move = new Move('', '', '', 0)
    move.amount = amount
    move.toId = contact._id
    move.to = contact.name
    move.at = new Date().toLocaleString()
    const moves = [move, ...this.user.moves]
    const user = { ...this.user, moves }
    user.coins -= amount
    this.user = user
    this._saveUser()
    return user
  }

  private _saveUser() {
    this.storageService.save(KeyUser, this.user)
  }
}
