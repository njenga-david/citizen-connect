import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users: any[] = []; // Initialize users array

  constructor() {}

  ngOnInit(): void {
    // Dummy data for demonstration
    this.users = [
      { Name: 'John Doe', Email: 'john.doe@example.com', Role: 'citizen' },
      { Name: 'Jane Smith', Email: 'jane.smith@example.com', Role: 'admin' },
      { Name: 'Michael Johnson', Email: 'michael.johnson@example.com', Role: 'gvn' },
      { Name: 'Emily Brown', Email: 'emily.brown@example.com', Role: 'citizen' },
      { Name: 'David Wilson', Email: 'david.wilson@example.com', Role: 'gvn' }
    ];
  }

  verifyUser(user: any) {
    console.log('Verifying user:', user);
    // Implement verification logic here
  }

  approveUser(user: any) {
    console.log('Approving user:', user);
    // Implement approval logic here
  }

  rejectUser(user: any) {
    console.log('Rejecting user:', user);
    // Implement rejection logic here
  }

  deleteUser(user: any) {
    console.log('Deleting user:', user);
    // Implement deletion logic here
  }
}
