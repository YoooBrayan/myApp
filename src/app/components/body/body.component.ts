import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {


  object : any; 
  dogs: String[];

  constructor() {
    this.object = {
      title: "Angular",
      description: "Framework JS",
      text: "asdasdaskdasdjasdaskjdasdkasjdaskdsad"
    }

    this.dogs = ["Rocky", "Luna", "Dante"];
   }

  ngOnInit(): void {
  }

}
