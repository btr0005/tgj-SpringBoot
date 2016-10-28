import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }  from './app.component';
import { JoinComponent } from './join.component';
import { MemberListComponent } from './memberlist.component';
import { MembersService } from './members.service';

@NgModule({
  imports:  [ 
		BrowserModule,
		FormsModule,
		HttpModule,
		Ng2BootstrapModule,
		RouterModule.forRoot([
			{
				path: 'join',
				component: JoinComponent
			},
			{
				path: 'members',
				component: MemberListComponent
			}
		])
	],
  providers: [
		MembersService
	],
  declarations: [ AppComponent,
				  JoinComponent,
				  MemberListComponent
				],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

