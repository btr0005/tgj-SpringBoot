package hello;

import java.util.ArrayList;

public class DatabaseFacade {
	
	public MembersService membersService;
	public StoriesService storiesService;
	
	public DatabaseFacade(MembersService membersService) {
		this.membersService = membersService;
	}
	
	public DatabaseFacade(StoriesService storiesService) {
		this.storiesService = storiesService;
	}
	
	public boolean addMember(Member member) {
		return membersService.addMember(member);
	}
	
	public ArrayList<Member> getMembers() {
		return membersService.getMembers();
	}
	
	public boolean addStory(Story story) {
		return storiesService.addStory(story);
	}
	
	public ArrayList<Story> getStories() {
		return storiesService.getStories();
	}
	
	public Story getStory(int storyId) {
		return storiesService.getStory(storyId);
	}
}