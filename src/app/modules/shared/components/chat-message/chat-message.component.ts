import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "../../models/chat.interface";

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.sass']
})
export class ChatMessageComponent implements OnInit {
  @Input()
  message: Chat;

  constructor() { }

  ngOnInit(): void {
  }
}
