import { Component, OnInit, Input } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent implements OnInit {

  @Input() height: string;
  
  constructor() { }

  ngOnInit() {}

}
