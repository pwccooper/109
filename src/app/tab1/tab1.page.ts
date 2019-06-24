import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Message } from '../message';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  messages : Message []=[];
  userName = '';

  constructor(private dataSrv : DataService, private shared: SharedService) {
    this.userName = this.shared.getUserName();
  }

  ionViewDidEnter(){
    this.dataSrv.getAllMessages().subscribe(res =>{
     this.messages = [];
      
     for (var i = 0; i< res.length; i++){
       var m = res[i];
       if (m.to == 'Everyone'|| m.to == this.userName){
         this.messages.push(m);
       }
     }

    });
   
  }

}
