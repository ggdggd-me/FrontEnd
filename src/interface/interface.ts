import { Timestamp } from "firebase/firestore";

export interface iReview {
  title: string;
  user: {
    name: string;
    duration: number;
    job: string;
  };
  reviewDescription: string;
}

export interface iReviewId extends iReview {
  id: string;
}

export interface iQnaQuestion {
  email: string;
  title: string;
  questionDescription: string;
  consertPersonalInfo: boolean;
  receiveAnswerByEmail: boolean;
  createdAt: Timestamp;
  modifiedAt: Timestamp;
}
