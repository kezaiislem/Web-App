import { Question } from "./Question";
import { Survey } from "./Survey";

export class Answer {
    id: number;
    value: number;
    question: Question;
    survey: Survey;
}