import { Component } from '@angular/core';
import { MembersService } from './members.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
			<h1>{{title}}</h1>
			<h2>{{member.name}} details!</h2>
			<div><label>id: </label>{{member.id}}</div>
			<div>
				<label>name: </label>
				<input [(ngModel)]="member.name" placeholder="name">
			</div>
			{{message}}
			`,
	providers: [MembersService]
})

export class AppComponent { 
	title = 'Join Club';
	member: Member = {
			id: 1,
			name: 'Chort',
			gender: 1,
		};
	message: any;
		
	constructor(private membersService: MembersService) { }	

			
	ngOnInit(): void {
		this.getMessage();
	}
	
	getMessage(): void {
		this.membersService.tellMe("David")
            .subscribe(
                data => this.message = JSON.stringify(data),
                error => console.log("Error HTTP GET Service")
            );
	}
	
}

export class Member {
	id: number;
	name: string;
	gender: number;
}



