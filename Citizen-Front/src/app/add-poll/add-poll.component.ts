import { Component } from '@angular/core';
import { AddingPollsService } from '../adding-polls.service';
import { CommonModule } from '@angular/common';
import { FormsModule,  } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-poll',
  standalone:true,
  imports:[CommonModule,RouterLink,FormsModule,RouterModule],
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.css']
})
export class AddPollComponent {
  title = '';
  description = '';
  options: string[] = ['', ''];

  constructor(private addingPollsService: AddingPollsService) { }

  addOption(): void {
    this.options.push('');
  }

  removeOption(index: number): void {
    this.options.splice(index, 1);
  }

  submitPoll(): void {
    this.addingPollsService.addPoll(this.title, this.description, this.options);
    this.title = '';
    this.description = '';
    this.options = ['', ''];
  }
}
