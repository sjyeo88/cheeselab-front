import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
// import { AuthGuard } from '@angular/common'



export const routes:Routes = [
  {path: '', redirectTo: '', children: [
    {path: 'interview_review'},
    {path: 'tips'},
    {path: 'faq'},
    {path: 'support'},
  ], }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

export class AppRoutingModule {
  public routes =  routes;
}
