import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment'
import { AppLayoutModel } from './models/app-layout.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '치즈랩';
  isVMenu:boolean = false;
  public constructor(
    private titleServ:Title,
    private layout:AppLayoutModel,
  ) {
    this.titleServ.setTitle(environment.defaultTitle + this.title);
    console.log(this.layout.menus);
  }

  ngOnInit() {
    console.log(document.getElementsByTagName('nav'));
  }

  toggleVMenu() {
    this.isVMenu = !this.isVMenu;
  }

}
