import { Component } from '@angular/core';
import { JoinComponent } from './join.component';

@Component({
  selector: 'my-app',
  template: `
			<div class="container">
				<div class="page-header">
					<h1>{{title}}</h1>
						<a href="#">Link</a>
				</div>
				
			<join-component></join-component>
			</div>			
			`,
})

export class AppComponent { 
	title = 'Homepage';
}



