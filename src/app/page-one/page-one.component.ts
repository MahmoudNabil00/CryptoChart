import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent extends BaseComponent implements OnInit {

  constructor(public router1 : Router) {
    super(router1);
  }

  override ngOnInit(): void {
  }

}
