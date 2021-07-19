import { NgModule } from '@angular/core';
import { ChatComponent } from './components/chat/chat.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: ChatComponent
  }
];

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ChatModule { }
