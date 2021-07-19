import { Component, OnInit } from '@angular/core';
import {NoperoomClientService} from "../../../../services/noperoom-client/noperoom-client.service";
import {Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {

  constructor(private nr: NoperoomClientService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.nr.connect(environment.connInfo.channel);
    this.nr.onReady().subscribe(data => console.log('ready', data));
  }
}
