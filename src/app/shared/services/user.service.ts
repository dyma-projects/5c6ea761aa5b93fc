import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: BehaviorSubject<string[]>;

  constructor() {
    this.users = new BehaviorSubject<string[]>([]);
  }

  addUser(name: string): void {
    const currentUSer = this.users.value;
    currentUSer.push(name);
    this.users.next(currentUSer);
  }
}
