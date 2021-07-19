import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    server: ['', Validators.required],
    nickname: ['', Validators.required],
    channel: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    const payload = {
      server: this.form.value.server,
      nickname: this.form.value.nickname,
      channel: this.form.value.channel
    };

    environment.connInfo = payload;
    this.router.navigate(['/chat'])
  }
}
