import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js'; 
@Component({
  selector: 'app-story1',
  templateUrl: './story1.component.html',
  styleUrls: ['./story1.component.scss']
})
export class Story1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['You are Agent 1324, undercover as Mr.Ambhigale. You are mission is to find a very crucial piece of information from the Mafia Team.', 'After successfully obtaining the information at tonight\'s party you were planning to leave but your cover was blown out. It\'s Code Blue!!',"To get away successfully you need to clear the dangerous path that awaits you, with its own puzzeledness!","Find the clues, clear the path as fast as you can! GAME ON!"],
      typeSpeed: 30,
      backSpeed: 20,
      showCursor: true,
      cursorChar: '|'
      
      // loop: true
 };
 
 const typed = new Typed('.typed-element', options);
 
  }
}
