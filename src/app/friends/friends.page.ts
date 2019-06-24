import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { DataService } from '../data.service';
import { Friend } from '../friend';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})

export class FriendsPage implements OnInit {
  friendName = '';
  friendList: Friend[] = [];

  constructor(private shared: SharedService, private data: DataService) {
    var myUserName = this.shared.getUserName();
    this.data.getFriends().subscribe(list => {
      this.friendList = [];
      for (var i = 0; i < list.length; i++) {
        var f = list[i];
        if (f.user == myUserName) {
          this.friendList.push(f);

        }
      }
    });
  }

  ngOnInit() {
  }

  register() {
    var friend = new Friend();
    friend.name = this.friendName;
    friend.user = this.shared.getUserName();
    this.data.saveFriend(friend);


    this.friendName = '';
  }
}
