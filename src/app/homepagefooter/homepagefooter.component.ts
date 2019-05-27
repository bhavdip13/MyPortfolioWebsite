import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepagefooter',
  templateUrl: './homepagefooter.component.html',
  styleUrls: ['./homepagefooter.component.css']
})
export class HomepagefooterComponent implements OnInit {
CurrentYear =(new Date()).getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
