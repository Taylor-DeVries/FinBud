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

export interface QuizPath{
  connectId?: number,
  id: number,
  responses: QuizPath[];
}

export interface QuizAnswer{
  connectId?: number,
  id:number,
  answer: string
}

export interface QuizText{
  connectId?: number,
  id:number,
  text: string[]
}