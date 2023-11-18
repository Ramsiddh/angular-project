import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myseries',
  templateUrl: './myseries.component.html',
  styleUrls: ['./myseries.component.css']
})
export class MySeriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Intro to CPM','image':'../../assets/img6.png'},
    {'id':2,'name':'ATC Orientation','image':'../../assets/img6.png'},
    {'id':3,'name':'Preparation','image':'../../assets/img6.png'},
    {'id':4,'name':'Live Orientation','image':'../../assets/img6.png'},
    {'id':5,'name':'Alphabet Game','image':'../../assets/img6.png'},
    {'id':6,'name':'Rythm of Life','image':'../../assets/img6.png'},
    {'id':7,'name':'Phobia Cure','image':'../../assets/img6.png'},
    {'id':8,'name':'Belief Imprint','image':'../../assets/img6.png'},

  ]
}