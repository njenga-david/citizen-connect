import { Component, OnInit } from '@angular/core';
import { Polls } from '../model/polls.model';
import { PollsService } from '../services/polls.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-polls',
  standalone:true,
  imports:[CommonModule,RouterModule,FormsModule],
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {
  polls: Polls[] = [];

  constructor(private pollsService: PollsService) { }

  ngOnInit(): void {
    this.displayPolls();
  }

  displayPolls(): void {
    this.pollsService.displayPolls().subscribe(
      (data: Polls[]) => {
        this.polls = data;
      },
      (error) => {
        console.error('Error fetching polls:', error);
      }
    );
  }

  deletePoll(index: number): void {
    if (confirm('Are you sure you want to delete this poll?')) {
      this.polls.splice(index, 1); // Remove from local array
      // Optionally, delete from backend or local storage using your service
      // this.pollsService.deletePoll(index).subscribe(...);
    }
  }

  // Method to handle voting logic (not fully implemented here)
  vote(pollIndex: number, optionIndex: number): void {
    // Implement your voting logic here
  }

  // Method to get vote count for a specific option
  getVoteCount(option: string): number {
    // Implement counting logic based on selected options
    return 0; // Placeholder, replace with actual logic
  }
}
