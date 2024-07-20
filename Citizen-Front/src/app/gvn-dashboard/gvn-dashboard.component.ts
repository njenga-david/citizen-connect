import { Component } from '@angular/core';
import { AiChatService } from '../ai-chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'gvn-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gvn-dashboard.component.html',
  styleUrls: ['./gvn-dashboard.component.css']
})
export class GvnDashboardComponent {
  showChatBoard: boolean = false;
  chatMessages: { sender: string, text: string }[] = [];
  userMessage: string = '';

  constructor(private aiChatService: AiChatService) { }

  sendMessage(): void {
    if (this.userMessage.trim()) {
      this.chatMessages.push({ sender: 'User', text: this.userMessage });
      this.aiChatService.getAiResponse(this.userMessage).subscribe(aiResponse => {
        this.chatMessages.push({ sender: 'AI', text: aiResponse });
      });
      this.userMessage = '';
    }
  }
}
