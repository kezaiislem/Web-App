import { Answer } from './Answer';

export class Question {
    id: number;
    text: string;
    type: number;
    choices: string[];
    answer: Answer;
}