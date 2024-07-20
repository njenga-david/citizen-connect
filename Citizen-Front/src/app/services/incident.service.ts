import { Injectable } from '@angular/core';
import { Incident } from '../model/incident.model';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  private incidents: Incident[] = [];

  constructor() {
    // Add some sample incidents
    this.incidents = [
      { area: 'Downtown', reportedBy: 'John Doe', reportedDate: new Date('2024-07-01'), description: 'Police killing demonstators', attachment: 'poto.jpeg' },
      { area: 'Riverside', reportedBy: 'Frank Green', reportedDate: new Date('2024-07-08'), description: 'Vandalism', attachment: 'killing2.jpeg' },
      { area: 'East Side', reportedBy: 'Jane Smith', reportedDate: new Date('2024-07-02'), description: 'Live burrets', attachment: 'kill4.jpeg' },
      { area: 'North End', reportedBy: 'Alice Johnson', reportedDate: new Date('2024-07-03'), description: 'Extrajudicial killings', attachment: 'kill3.jpeg' },
      { area: 'Riverside', reportedBy: 'Frank Green', reportedDate: new Date('2024-07-08'), description: 'Vandalism', attachment: 'killing2.jpeg' },
      { area: 'South Park', reportedBy: 'Charlie Davis', reportedDate: new Date('2024-07-05'), description: 'Illegal dumping', attachment: 'vid1.mp4' },
      { area: 'Central Plaza', reportedBy: 'Dana Evans', reportedDate: new Date('2024-07-06'), description: 'Graffiti', attachment: 'killing.jpg' },
      { area: 'Market Street', reportedBy: 'Eve Harris', reportedDate: new Date('2024-07-07'), description: 'Noise complaint', attachment: 'vid1.mp4' },
      { area: 'West Side', reportedBy: 'Bob Brown', reportedDate: new Date('2024-07-04'), description: 'Street light out', attachment: 'vid1.mp4' },
    ];
  }

  getIncidents(): Incident[] {
    return this.incidents;
  }

  addIncident(incident: Incident) {
    this.incidents.push(incident);
  }
}
