import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JoinComponent } from './join.component';
import { MemberListComponent } from './memberlist.component';
import { MembersService } from './members.service';

import { StoryComponent } from './story.component';

@NgModule({
  imports:  [ 
		BrowserModule,
		FormsModule,
		//StoryModule,
		AppRoutingModule,
	],
  providers: [
		MembersService
	],
  declarations: [ AppComponent,
				  JoinComponent,
				  MemberListComponent,
				  StoryComponent
				],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

