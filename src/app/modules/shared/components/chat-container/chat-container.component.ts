import { Component, OnInit } from '@angular/core';
import {Chat} from "../../models/chat.interface";
import {ChatMessageRouterService} from "../../../../services/chat-message-router/chat-message-router.service";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.sass']
})
export class ChatContainerComponent implements OnInit {
  messages: Chat[] = [];
  channel = environment.connInfo.channel
  constructor(private cmr: ChatMessageRouterService) { }

  ngOnInit(): void {
    this.cmr.onMessage().subscribe((data: any) => {
      if (data) {
        this.messages.push(data);
      }
    });
  }
}
