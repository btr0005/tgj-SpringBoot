package hello;

import java.util.ArrayList;

public interface StoriesService {
	
	public boolean addStory(Story story);
	public ArrayList<Story> getStories();
	public Story getStory(int id);
	
}