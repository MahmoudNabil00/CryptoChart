import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ListPageComponent } from './components/list-page/list-page.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { HttpClientModule } from  '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import{ NgChartsModule } from "ng2-charts";
import { BaseComponent } from './base/base.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component'
@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    DetailsPageComponent,
    BaseComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,MatCheckboxModule,FormsModule ,
    MatToolbarModule ,MatSelectModule,MatFormFieldModule,
    MatInputModule,HttpClientModule,MatTableModule,MatPaginatorModule,
    MatSortModule,NgChartsModule
  ],
  exports:[
    ListPageComponent,
    DetailsPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
