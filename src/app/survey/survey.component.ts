import { Factor } from './../entities/Factor';
import { AnswerPostObject } from './../requestObjects/AnswerPostObject';
import { AnswersPostObject } from './../requestObjects/AnswersPostObject';
import { Answer } from './../entities/Answer';
import { Survey } from './../entities/Survey';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HostService } from '../services/host.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  hostId: string;
  survey: Survey;
  answers: Answer[];
  answersPost: AnswersPostObject;
  test: number[];

  constructor(private route: ActivatedRoute, private service: HostService, private router: Router) { }

  ngOnInit(): void {
    this.hostId = this.route.snapshot.params['id'];
    this.loadSurvey();
  }

  loadSurvey() {
    this.service.getResult(this.hostId)
      .subscribe(data => {
        console.log(data);
        this.survey = data;
        this.initAnswers();
      }, error => console.log(error));
  }

  onSubmit() {
    this.prepareData();
    this.postAnswer();
  }

  prepareData() {

    this.answersPost = new AnswersPostObject();
    this.answersPost.surveyId = this.survey.id;
    this.answers.forEach(answer => {
      var postAnswer = new AnswerPostObject();
      postAnswer.id = answer.id;
      postAnswer.questionId = answer.question.id;
      postAnswer.value = answer.value;
      if (answer.values != null) {
        postAnswer.values = new Array();
        for (var i = 0; i < answer.values.length; i++) {
          if(answer.values[i] == 1){
            postAnswer.values.push(i);
          }
        }
      }
      this.answersPost.answers.push(postAnswer);
    });


    /*this.answers.forEach(answer => {
      answer.question.answer = null;
      answer.survey.sections = null;
    })*/


    /*this.answersPost = [];
    this.answers.forEach(answer => {
      var element = new AnswersPostObject();
      element.value = answer.value;
      element.questionId = answer.question.id;
      element.surveyId = answer.survey.id;
      this.answersPost.push(element);
    })*/
  }

  goToSuccess() {
    this.router.navigate(['/login']);
  }

  postAnswer() {
    this.service.postAnswer(this.answersPost)
      .subscribe(data => {
        this.goToSuccess();
      }, error => console.log(error));
  }

  initAnswers() {
    this.answers = [];
    this.survey.factors.forEach(factor => {
      factor.questions.forEach(question => {
        var answer = new Answer()
        answer.question = question;
        answer.value = 1;
        if (question.type == 4) {
          answer.values = new Array(question.choices.length);
        }
        answer.survey = this.survey;
        question.answer = answer;
        this.answers.push(question.answer);
      })
    });
  }

  /*printAnswers() {
    console.log("Empty");
    this.answers.forEach(answer => {
      console.log(answer.question.text + " " + answer.value)
    });
  }*/

  printAnswersValues() {
  }

}
