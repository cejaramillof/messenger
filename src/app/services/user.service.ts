import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[];

  constructor() {
    let myUser: User = {
      nick: 'cejaramillof',
      subnick: 'cejarami',
      age: 23,
      email: 'cejaramillof@gmail.com',
      friend: true,
      uid: 1,
      status: 'offline'
    };

    let user1: User = {
      nick: 'Eduardo',
      age: 24,
      email: 'ed@aoe.aoe',
      friend: true,
      uid: 1,
      status: 'online'
    };
    let user2: User = {
      nick: 'Freddy',
      age: 28,
      email: 'fred@aoe.aoe',
      friend: true,
      uid: 2,
      status: 'online'
    };
    let user3: User = {
      nick: 'Yuliana',
      age: 18,
      email: 'yuli@aoe.aoe',
      friend: true,
      uid: 3,
      status: 'offline'
    };
    let user4: User = {
      nick: 'Ricardo',
      age: 17,
      email: 'rick@aoe.aoe',
      friend: false,
      uid: 4,
      status: 'away'
    };
    let user5: User = {
      nick: 'Marcos',
      age: 30,
      email: 'marcos@aoe.aoe',
      friend: false,
      uid: 5,
      status: 'busy'
    };

    this.friends = [user1, user2, user3, user4, user5];
  }

  /*getFriends() {
    return this.friends;
  }*/
  getFriends = () => this.friends;
  getFriendById = uid => this.friends.find(user => user.uid == uid);
}
