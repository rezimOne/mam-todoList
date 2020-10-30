import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
//kod js do cwiczeń https://www.linkedin.com/learning/
//javascript-essential-training-3/add-inline-javascript-to-a-html-document

let date = new Date()
document.body.innerHTML = (`The date today is: ${(date.getMonth()+1)}/${date.getDate()}/${date.getFullYear()}`);

let negInteger = -3.14;
let escQuote = "Quotes can also be \"escaped\".";
let heSunIsWarm = true;
let emptyInside = null;
let justAnotherVariable;

console.log(typeof escQuote);
