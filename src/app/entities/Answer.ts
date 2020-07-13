import { Question } from "./Question";
import { Survey } from "./Survey";

export class Answer {
    id: number;
    value: number;
    question: Question;
    chechBoxes: number[];
    values: number[];
    survey: Survey;
}