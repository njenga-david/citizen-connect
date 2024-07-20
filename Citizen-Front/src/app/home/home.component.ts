import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../services/incident.service';
import { Incident } from '../model/incident.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  incidents: Incident[] = [];

  constructor(private incidentService: IncidentService) {}

  ngOnInit(): void {
    this.incidents = this.incidentService.getIncidents();
    console.log('Incidents loaded:', this.incidents);
  }

  isImage(url?: string): boolean {
    return url ? url.match(/\.(jpeg|jpg|gif|png)$/) != null : false;
  }

  isVideo(url?: string): boolean {
    return url ? url.match(/\.(mp4|webm|ogg)$/) != null : false;
  }
}
