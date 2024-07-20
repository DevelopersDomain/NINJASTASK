// src/app/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = AppConfig.title;

  constructor() { }

  ngOnInit(): void {
    // Additional initialization code
  }
}
