import { SharedService } from './shared.service';

  

export class Message {
    
    public text : String = '';
    public imageUrl : String = '';
    public createdOn: Date;
    public from : String = '';
    public to : String = '';

    constructor(){
        this.to = 'Everyone';
        this.createdOn = new Date();

    }

}
