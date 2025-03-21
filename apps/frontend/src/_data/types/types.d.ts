export interface Answer {
  text: string;
  nextQuestionId?: number;
  result?: string;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export interface HistoryState {
  loading: boolean;
  historyArray: number[];
  error: string;
}

export interface Node {
  connectId?: number;
  id: number;
  answer: string;
  text: string[];
  responses: Node[];
}
