export interface Question {
  question: string;
  solution: string;
  explanation: string;
  difficulty: 'basic' | 'medium' | 'hard';
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  properties: string[];
  remember: string[];
  keyPoints: string[];
  questions: Question[];
}
