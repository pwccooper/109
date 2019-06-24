import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { SharedService } from '../shared.service';
import { Message } from '../message';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  postTest= '';
  imageUrl = '';
  to = 'Everyone';
  friends = [];

  constructor(private dataSrv : DataService, private shared: SharedService) {
    var myUserName = this.shared.getUserName();
    this.dataSrv.getFriends().subscribe(list =>{
      this.friends = [];
      for (var i= 0; i< list.length; i++){
        var f = list[i];
        if (f.user == myUserName){
          this.friends.push(f);
          console.log(f);
        }
      }
    });
   }

  createPost(){
      var m = new Message();
      m.text = this.postTest;
      m.imageUrl = this.imageUrl;
      m.from = this.shared.getUserName();
      m.to = this.to;

      this.dataSrv.postMessage(m);

    console.log ('creating the post, m');

    this.postTest = '';
    this.imageUrl = '';

    }
 

}
