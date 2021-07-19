import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbButtonsModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ChatContainerComponent } from './components/chat-container/chat-container.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatWriteComponent } from './components/chat-write/chat-write.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {AlertComponent} from "./components/alert/alert.component";
import {TextInputComponent} from "./components/text-input/text-input.component";
import {SelectComponent} from "./components/select/select.component";
import {TextareaComponent} from "./components/textarea/textarea.component";
import {LoadingComponent} from "./components/loading/loading.component";
import {CardComponent} from "./components/card/card.component";
import { TranslateModule } from '@ngx-translate/core';
import {MomentifyPipe} from "./pipes/momentify/momentify.pipe";

const NG_BOOTSTRAP_MODULES = [
  NgbButtonsModule
];

const FRAMEWORK_MODULES = [
  CommonModule,
  NgbModule,
  FontAwesomeModule,
  FormsModule,
  ReactiveFormsModule,
  TranslateModule
];

const SHARED_COMPONENTS = [
  ChatContainerComponent,
  ChatMessageComponent,
  ChatWriteComponent,
  UserListComponent,
  AlertComponent,
  TextInputComponent,
  SelectComponent,
  TextareaComponent,
  LoadingComponent,
  CardComponent,

  MomentifyPipe
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS
  ],
  imports: [
    ...FRAMEWORK_MODULES,
    ...NG_BOOTSTRAP_MODULES
  ],
  exports: [
    ...FRAMEWORK_MODULES,
    ...NG_BOOTSTRAP_MODULES,
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule {
}
