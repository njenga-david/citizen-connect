import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../services/incident.service';
import { Incident } from '../model/incident.model'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-display-incidents',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './display-incidents.component.html',
  styleUrls: ['./display-incidents.component.css']
})
export class DisplayIncidentsComponent implements OnInit {
  incidents: Incident[] = [];

  constructor(private incidentService: IncidentService) {}

  ngOnInit(): void {
    this.incidents = this.incidentService.getIncidents();
    console.log('Incidents loaded:', this.incidents);
  }

  isImage(url: string): boolean {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

  isVideo(url: string): boolean {
    return url.match(/\.(mp4|webm|ogg)$/) != null;
  }
}
