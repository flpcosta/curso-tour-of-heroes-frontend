import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];

  add(message: string): void{
    this.messages.push(message);
  }

  clear(): void{
    this.messages = [];
  }

  public getMessages(): string[]{
    return this.messages;
  }
}
