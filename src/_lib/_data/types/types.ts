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
  link?: string;
  responses: Node[];
}

export interface QuizPath {
  answer: string;
  connectId?: number;
  id: number;
  mainText?: string;
  responses: QuizPath[];
}

export interface QuizText {
  connectId?: number;
  id: number;
  extendedText: string[];
}

export interface QuizLink {
  id: number;
  link: string;
}

export interface DashboardGoal {
  id: number;
  goalText: string;
}

export interface DashboardAchievement {
  id: number;
  achievementText: string;
}

export interface UserAchievementEntry{
  achievementId: number;
  userAchievementBoolean: number;
  userAchievementGoalValue: number;
  userAchievementId: number;
  userAchievementProgressValue: number;
  userAchievementStatus: string;
}

export interface UserAchievement{
  error: string;
  userAchievement: UserAchievementEntry;
}

export interface UserAchievements {
  error: string;
  userAchievements: UserAchievementEntry[];
}

export interface UserInfo {
  userName?: string;
  userProfilePicture?: string;
  createdAt?: string;
}
