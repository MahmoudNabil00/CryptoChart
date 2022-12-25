import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './components/list-page/list-page.component'
import { DetailsPageComponent } from './components/details-page/details-page.component'
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';

const routes: Routes = [
  {path:'' , redirectTo:'coins-list' , pathMatch:'full'},
  {path:'coins-list' , component : ListPageComponent},
  {path:'details/:id' , component : DetailsPageComponent},
  { path: 'pageOne', component: PageOneComponent },
  { path: 'pageTwo', component: PageTwoComponent },
  { path: 'pageThree', component: PageThreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
