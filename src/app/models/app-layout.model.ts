import { AppRoutingModule, routes } from '../modules/app-routing.module';
import { Routes } from '@angular/router';

const menuName:Array<string> = [
  '면접 후기',
  '면접 정보',
  '자주묻는 질문',
  '고객센터',
]

export class AppLayoutModel {
  menus:Array<{name: string, path:string, active:boolean }> = routes[0]
  .children.map((obj, idx)=>{
    return { name:menuName[idx] ? menuName[idx] : 'undefined',
             path:obj.path,
             active:false }
  })

  constructor() {}
}
