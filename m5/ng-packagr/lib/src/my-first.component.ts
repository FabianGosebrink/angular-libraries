import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-first',
  templateUrl: 'my-first.component.html',
  styles: ['p {  color: green; font-size: 20px;} '],
})
export class MyFirstComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
