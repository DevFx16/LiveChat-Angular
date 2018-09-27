import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent implements OnInit {

  height: string;
  
  constructor() { }

  ngOnInit() {
    this.height = $(window).height() + 'px';
  }

}
