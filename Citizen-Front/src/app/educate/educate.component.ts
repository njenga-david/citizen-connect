// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-educate',
//   standalone: true,
//   imports: [CommonModule, FormsModule, RouterModule],
//   templateUrl: './educate.component.html',
//   styleUrls: ['./educate.component.css']
// })
// export class EducateComponent implements OnInit {
//   pdfDocuments: { title: string, description: string, link: string }[] = [];
//   videoDocuments: { title: string, description: string, link: string }[] = [];

//   constructor() {}

//   ngOnInit(): void {
//     this.pdfDocuments = this.getPdfDocuments();
//     this.videoDocuments = this.getVideoDocuments();
//   }

//   getPdfDocuments() {
//     return [
//       {
//         title: 'Finance Bill 2024',
//         description: 'A comprehensive overview of the Finance Bill 2024.',
//         link: 'https://example.com/finance-bill-2024.pdf'
//       },
//       {
//         title: 'Healthcare Reform Act',
//         description: 'Details on the new Healthcare Reform Act.',
//         link: 'https://example.com/healthcare-reform-act.pdf'
//       },
//       // Add more documents as needed
//     ];
//   }

//   getVideoDocuments() {
//     return [
//       {
//         title: 'Understanding the Finance Bill 2024',
//         description: 'A video explanation of the Finance Bill 2024.',
//         link: 'path/to/finance-bill-2024-video.mp4'
//       },
//       {
//         title: 'Healthcare Reform Act Explained',
//         description: 'An in-depth look at the Healthcare Reform Act.',
//         link: 'path/to/healthcare-reform-act-video.mp4'
//       },
//       // Add more videos as needed
//     ];
//   }
// }
