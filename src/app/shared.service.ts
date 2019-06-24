import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  userName = 'Paul';
  friendList = [];
  
  constructor() { }

  public getUserName(){
    return this.userName;
  }

  public setUserName(value){
    this.userName = value;
  }

  public getFriends(){
    return this.friendList;
  }

  public saveNewFriend(name){
    this.friendList.push(name);
  }

}


