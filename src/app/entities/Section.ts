import { Question } from "./Question";

export class Section {
    id: number;
    title: string;
    description: string;
    questions: Question[];
}