import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  theUserName = "";

  constructor(private shared : SharedService) {
  this.theUserName = this.shared.getUserName();
  }

  saveChanges() {
    this.shared.setUserName(this.theUserName);
  }


}
