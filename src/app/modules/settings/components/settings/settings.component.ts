import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";
import { v4 } from 'uuid';
import { faMagic, faPlug } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  faMagic = faMagic
  faPlug = faPlug

  form: FormGroup = this.formBuilder.group({
    nickname: ['', Validators.required],
    channel: ['', Validators.required]
  });

  @ViewChild('channelName')
  channelName: ElementRef;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    environment.connInfo.nickname = this.form.value.nickname;
    environment.connInfo.channel = this.form.value.channel
    this.router.navigate(['/chat'])
  }

  generateChannelName() {
    this.form.controls['channel'].setValue(v4());
  }
}
