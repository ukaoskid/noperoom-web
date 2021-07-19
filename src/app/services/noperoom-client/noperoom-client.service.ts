import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import {BehaviorSubject, Observable} from "rxjs";
import {Chat} from "../../modules/shared/models/chat.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NoperoomClientService {
  private server: Socket | undefined;
  private ready = new BehaviorSubject(false);
  private message = new BehaviorSubject(undefined);

  constructor() {

  }

  connect(channel: string) {
    this.server = io(environment.connInfo.server, { secure: true });
    this.server.on('connect', () => this.ready.next(true));
    this.server.on(channel, args => this.message.next(args));
  }

  onReady(): Observable<boolean> {
    return this.ready.asObservable();
  }

  onMessage(): Observable<any> {
    return this.message.asObservable();
  }

  sendMessage(data: Chat) {
    this.server?.emit('cm', data);
  }
}
