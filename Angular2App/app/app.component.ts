import { Component } from '@angular/core';
import { JoinComponent } from './join.component';

@Component({
  selector: 'my-app',
  template: `
			<div class="container">
				<div class="page-header">
					<h1>{{title}}</h1>
						<a routerLink="/join">Become a Member</a>
				</div>
				
				<router-outlet></router-outlet>
			</div>			
		`,
})

export class AppComponent { 
	title = 'Homepage';
}



