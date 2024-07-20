import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-chat',
  standalone:true,
  imports:[CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.css']
})
export class AIChatComponent implements OnInit {
  messages: string[] = []; // Example array to hold chat messages
  userInput: string = ''; // User input for AI chat

  constructor() { }

  ngOnInit(): void {
    // Initialize chat messages or perform initialization logic
    this.messages.push('Welcome to AI Chat! How can I assist you today?');
  }

  sendMessage(): void {
    // Example: Handle sending user message and receiving AI response
    this.messages.push(`You: ${this.userInput}`);
    // Add logic to send user input to AI service and receive response
    this.userInput = ''; // Clear user input after sending
  }
}
