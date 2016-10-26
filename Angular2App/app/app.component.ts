import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'my-app',
  template: `
			<div class="container">
				<!--<alert type="info" dismissible="true">Welcome to the hompeage!</alert>-->
				<div class="page-header"><h1>{{title}}</h1></div>
				<!--<nav class="navbar navbar-default"></nav>-->
				<a href="#">Link</a>
			</div>
			`,
	providers: [MembersService]
})

export class AppComponent { 
	title = 'Homepage';
}



