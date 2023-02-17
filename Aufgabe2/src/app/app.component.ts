import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aufgabe2';
  username ='';
  isTheFiledEmpty = true;
  username1 = '';
  username2 = '';

  onTyping(event:any){

  }

  isTheTextEmpty(event:any){

    if((<HTMLInputElement>event.target).value != "" ){
      this.isTheFiledEmpty = false;
    }else{
      this.isTheFiledEmpty = true;
    }


  }

  resetInput(){
    this.isTheFiledEmpty = true;
    this.username = '';
    this.username1 = '';
    this.username2 = '';

  }
}
