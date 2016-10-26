import { Component } from '@angular/core';

export class Hero {
	id : number;
	name : string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent { 
	title: string = 'Tour of Heroes';
	hero: Hero = {
	  id: 1,
	  name: 'Windstorm'
	};

}
