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
  initialState: boolean;
}

export interface Node {
  connectId?: number;
  id: number;
  answer: string;
  text: string[];
  responses: Node[];
}

export interface QuizPath {
  answer: string,
  connectId?: number,
  id: number,
  mainText?: string,
  responses: QuizPath[];
}

export interface QuizAnswer {
  connectId?: number,
  id: number,
  answer: string
}

export interface QuizText {
  connectId?: number,
  id: number,
  extendedText: string[]
}