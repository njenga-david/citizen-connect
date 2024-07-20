import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileImageUrl!: string;
  username!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Fetch user profile data from the service (replace with actual service call)
    this.profileImageUrl = 'C:\Users\NJENGA\Desktop\Citizen\Citizen-Front\src\app\Assets\morris.jpg'; // Placeholder image path
    this.username = 'John Doe'; // Placeholder username
  }

  editProfile(): void {
    // Navigate to the edit profile page
    this.router.navigate(['/edit-profile']);
  }

  logout(): void {
    // Implement logout logic
    // For example, clear user data from local storage and navigate to the login page
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
