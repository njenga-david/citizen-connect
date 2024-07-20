// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth/auth.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-navbar',
//   standalone:true,
//   imports:[CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit {

//   isCitizen: boolean = false;
//   isAdmin: boolean = false;
//   isGvn: boolean = false;

//   constructor(private authService: AuthService) { }

//   ngOnInit(): void {
//     this.setUserRole();
//   }

//   setUserRole(): void {
//     this.authService.getUserRole().subscribe(
//       (userRole: string) => {
//         if (userRole === 'citizen') {
//           this.isCitizen = true;
//         } else if (userRole === 'admin') {
//           this.isAdmin = true;
//         } else if (userRole === 'government_official') {
//           this.isGvn = true;
//         } else {
//           // Handle other roles or defaults
//         }
//       },
//       (error) => {
//         console.error('Error fetching user role:', error);
//         // Handle error case
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
    imports:[CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  standalone:true,

  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCitizen: boolean = false;
  isAdmin: boolean = false;
  isGvn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.setUserRole();
  }

  setUserRole(): void {
    this.authService.getUserRole().subscribe(
      (userRole: string) => {
        if (userRole === 'citizen') {
          this.isCitizen = true;
        } else if (userRole === 'admin') {
          this.isAdmin = true;
        } else if (userRole === 'government_official') {
          this.isGvn = true;
        } else {
          // Handle other roles or defaults
        }
      },
      (error) => {
        console.error('Error fetching user role:', error);
        // Handle error case
      }
    );
  }
}
