import { Component } from '@angular/core';

import { HeroesComponent } from './heroes.component';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<nav>
		<a routerLink="/dashboard">Dashboard</a>
		<a routerLink="/heroes">Heroes</a>
	</nav>
	<router-outlet></router-outlet>
	`
	styleUrls: [ 'app.component.css' ]
})
export class AppComponent {
	title: string = 'Tour of Heroes';
}