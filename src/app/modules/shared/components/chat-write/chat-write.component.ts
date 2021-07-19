import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatMessageRouterService} from "../../../../services/chat-message-router/chat-message-router.service";
import {Chat} from '../../models/chat.interface';
import {environment} from "../../../../../environments/environment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-chat-write',
  templateUrl: './chat-write.component.html',
  styleUrls: ['./chat-write.component.sass']
})
export class ChatWriteComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    message: ['', Validators.required]
  });

  @ViewChild('inputMessage')
  inputMessage: ElementRef;

  constructor(private cmr: ChatMessageRouterService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  sendMessage(message: string) {
    const data: Chat = {
      n: environment.connInfo.nickname,
      t: Date.now(),
      c: environment.connInfo.channel,
      m: message
    };
    this.cmr.sendMessage(data);
    this.form.reset();
  }

  submit() {
    this.sendMessage(this.form.value.message);
  }
}
