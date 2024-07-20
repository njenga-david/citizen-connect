import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Polls } from '../model/polls.model';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  private polls: Polls[] = [];

  constructor() { }

  addPolls(polls: Polls): Observable<any> {
    this.polls.push(polls);
    return of({ success: true, message: 'Poll added successfully' });
  }

  displayPolls(): Observable<Polls[]> {
    return of(this.polls);
  }

  deletePoll(index: number): Observable<any> {
    if (index >= 0 && index < this.polls.length) {
      this.polls.splice(index, 1);
      return of({ success: true, message: 'Poll deleted successfully' });
    } else {
      return of({ success: false, message: 'Invalid index for deletion' });
    }
  }
}
