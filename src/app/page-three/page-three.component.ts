import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent extends BaseComponent implements OnInit {

  constructor(public router3 : Router) {
    super(router3);
  }

  override ngOnInit(): void {
  }

}
