/**
 * Created by jialao on 2016/10/10.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'

import { AppComponent }   from './app.component';
import HeroService from './hero.service';
import {HeroesComponent} from './heroes.component';
import HeroDetailComponent from './hero-detail.component'
import DashboardComponent from './dashboard.component'

import {AppRoutingModule} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule],
    declarations: [ AppComponent,HeroDetailComponent,HeroesComponent,DashboardComponent ],
    providers:[HeroService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

