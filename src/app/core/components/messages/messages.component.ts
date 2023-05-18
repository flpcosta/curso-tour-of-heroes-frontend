import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent {

  // Injetando o MessageService no component Messages
  constructor(public messageService: MessageService){}

}
