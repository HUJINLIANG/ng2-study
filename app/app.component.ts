/**
 * Created by jialao on 2016/11/7.
 */
import { Component } from '@angular/core';
@Component({
    moduleId:module.id,
    selector: 'my-app',
    styleUrls: ['app.component.css'],
    template: `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/dashboard" routerLinkActive="active">dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
</nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
    title = 'Tour of Heroes';
}
