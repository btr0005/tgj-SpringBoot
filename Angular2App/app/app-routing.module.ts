import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { JoinComponent } from './join.component';
import { MemberListComponent } from './memberlist.component';
import { StoryComponent } from './stories/story.component';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{
				path: 'join',
				component: JoinComponent
			},
			{
				path: 'members',
				component: MemberListComponent
			},
		])
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}