import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent extends BaseComponent implements OnInit {

  constructor(public router2 : Router) {
    super(router2);
  }

  override ngOnInit(): void {
  }

}
