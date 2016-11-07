/**
 * Created by jialao on 2016/11/7.
 */
import { Component, OnInit } from '@angular/core';

import HeroService from './hero.service';
import {Hero} from './hero';

@Component({
    moduleId:module.id,
    selector:'my-dashboard',
    templateUrl:'dashboard.component.html',
    styleUrl:['dashboard.component.css']
})
export default class DashboardComponent{
    heroes:Hero[] = [];
    constructor(private heroService:HeroService){}

    ngOnInit():void{
        console.log('dashboard init');
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }
}
