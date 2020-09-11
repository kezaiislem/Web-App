import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.css']
})
export class SubmittedComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle();
  }

  private setTitle(){
    this.titleService.setTitle("Success");
  }

}
