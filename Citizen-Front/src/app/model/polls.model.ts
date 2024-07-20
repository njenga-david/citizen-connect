// polls.model.ts

export interface PollOption {
    text: string;
    votes: number;
  }
  
  export interface Polls {
    question: string;
    options: PollOption[];
    selectedOption?: string; // Optional if tracking selected option
  }
  