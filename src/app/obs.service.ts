import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObsService {
  constructor() {}

  private usersSubject: BehaviorSubject<string[]> = new BehaviorSubject<
    string[]
  >([]);
  users$: Observable<string[]> = this.usersSubject.asObservable();

  addUser(user: string): void {
    const currentUsers = this.usersSubject.value;
    const updatedUsers = [...currentUsers, user];
    this.usersSubject.next(updatedUsers);
  }

  deleteUser(user: string): void {
    const currentUsers = this.usersSubject.value;
    const updatedUsers = currentUsers.filter((u) => u !== user);
    this.usersSubject.next(updatedUsers);
  }
}
