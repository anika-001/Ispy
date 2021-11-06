import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Story1Component } from '../story1/story1.component';
@Component({
  selector: 'app-mystart',
  templateUrl: './mystart.component.html',
  styleUrls: ['./mystart.component.scss']
})
export class MystartComponent implements OnInit {

  constructor(private Router:Router) {
    
   }

  ngOnInit(): void {

  }
vidEnded(){
  
  this.Router.navigate(['/story']);
//  this.Router.navigate(Story1);
}
}
