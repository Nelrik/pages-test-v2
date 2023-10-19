import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alan Diaz';

  ngOnInit(): void {
    $("header").append("<div class='glitch-window'></div>");
    //fill div with clone of real header
    $( "h1.glitched" ).clone().appendTo( ".glitch-window" );
  }
}
