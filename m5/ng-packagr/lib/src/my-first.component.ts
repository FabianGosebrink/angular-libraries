import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-first',
  template: '<p>my first works</p>',
  styles: ['p {  color: green; font-size: 20px;} '],
})
export class MyFirstComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
