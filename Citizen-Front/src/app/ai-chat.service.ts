import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiChatService {
  getAiResponse(userMessage: string): Observable<string> {
    // Mock response for now; replace with actual AI service call
    const aiResponse = 'This is a  response from the AI.';
    return of(aiResponse);
  }
}
