import { Message } from './message';
import { Injectable } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from 'angularfire2/firestore';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import { Friend } from './friend';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  allMessages: Observable<Message[]>;
  allFriends: Observable<Friend[]>;

  messageCollection: AngularFirestoreCollection<Message>;
  friendCollection: AngularFirestoreCollection<Friend>;

  constructor(private fb: AngularFirestore) { 
    this.messageCollection = fb.collection<Message>('messages');
    this.friendCollection = fb.collection<Friend>('friends');

    this.retrieveMessageFromDB();
    this.retrieveFriendsFromDB();
  }

  private retrieveMessageFromDB() {
    this.allMessages = this.messageCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(m => {
          var data = m.payload.doc.data();
          var id = m.payload.doc.id;
          var d: any = data.createdOn;
          data.createdOn = new firestore.Timestamp(
            d.seconds,
            d.nanoseconds
          ).toDate();
          return { id, ...data };
        });
      })
    );
  }


  private retrieveFriendsFromDB() {
    console.log('getting friends');
    this.allFriends = this.friendCollection.valueChanges();
  }


  public postMessage(message: Message) {
   var item = Object.assign({}, message);
   this.messageCollection.add(item);
  }



  public getAllMessages() {
    return this.allMessages;
  }

 public saveFriend(friend: Friend) {
    var item = Object.assign({}, friend);
    this.friendCollection.add(item);
  }

  public getFriends(){
    this.retrieveFriendsFromDB
    return this.allFriends;
  }

 
}
