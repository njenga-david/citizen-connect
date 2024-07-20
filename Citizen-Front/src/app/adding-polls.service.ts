import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddingPollsService {
  private polls: Array<{ title: string, description: string, options: string[] }> = [];

  constructor() { }

  addPoll(title: string, description: string, options: string[]): void {
    this.polls.push({ title, description, options });
  }

  getPolls(): Array<{ title: string, description: string, options: string[] }> {
    return this.polls;
  }
}
