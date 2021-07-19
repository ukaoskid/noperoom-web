import { Injectable } from '@angular/core';
import {NoperoomClientService} from "../noperoom-client/noperoom-client.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatMessageRouterService {
  private message = new BehaviorSubject(undefined);

  constructor(private nr: NoperoomClientService) {
    this.nr.onMessage().subscribe(data => this.routeMessage(data));
  }

  routeMessage(message: any) {
    if (message) {
      this.message.next(message);
    }
  }

  sendMessage(message: any) {
    const payload = {
      ...message,
      own: true
    }
    this.nr.sendMessage(message);
    this.message.next(payload);
  }

  onMessage() {
    return this.message.asObservable();
  }
}
