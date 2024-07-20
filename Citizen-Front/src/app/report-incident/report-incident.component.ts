// src/app/components/report-incident/report-incident.component.ts
import { Component } from '@angular/core';
import { IncidentService } from '../services/incident.service';
import { Incident } from '../model/incident.model'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report-incident',
  standalone:true,
  imports:[CommonModule, FormsModule],
  templateUrl: './report-incident.component.html',
  styleUrls: ['./report-incident.component.css']
})
export class ReportIncidentComponent {
  incident: Incident = {
    area: '',
    reportedBy: '',
    reportedDate: new Date(),
    description: '',
    attachment: ''
  };

  constructor(private incidentService: IncidentService) {}

  submitIncident(form: any) {
    if (form.valid) {
      this.incidentService.addIncident(this.incident);
      form.resetForm();
      this.incident = {  // Clear incident object after submission
        area: '',
        reportedBy: '',
        reportedDate: new Date(),
        description: '',
        attachment: ''
      };
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Check file type and set attachment accordingly
      if (file.type.includes('image')) {
        this.incident.attachment = URL.createObjectURL(file); // Assuming it's an image
      } else if (file.type.includes('video')) {
        this.incident.attachment = URL.createObjectURL(file); // Assuming it's a video
      } else {
        console.log('Unsupported file type');
      }
    }
  }
}
