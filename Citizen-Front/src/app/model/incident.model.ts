// src/app/models/incident.model.ts
export interface Incident {
  area: string;
  reportedBy: string;
  reportedDate: Date;
  attachment?: string;  // URL to photo or video
  description: string;
}
