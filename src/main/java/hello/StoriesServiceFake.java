package hello;

import java.io.BufferedWriter;
import java.io.BufferedReader;
import java.io.FileWriter;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class StoriesServiceFake implements StoriesService {

	public final String storiesDataFile = "storiesData.txt";

    public StoriesServiceFake() {}

    public boolean addStory(Story story) {
		BufferedWriter bw = null;
		
		try {
			bw = new BufferedWriter(
						new FileWriter(storiesDataFile,	true));
				
			System.out.println(story.getTextUnits().get(1).getAuthor().getName());
				
			bw.write(story.getId() + "," +
					 story.getName() + "," +
					 story.getPerTurnWordLimit() + "," +
					 story.getTextUnits());
	 
			bw.newLine();
			bw.flush();
			bw.close();
			
		}
		catch (IOException e) {
			return false;
		}
		
		return true;
	}
	
	public ArrayList<Story> getStories() {
		
		ArrayList<Story> stories = new ArrayList<Story>();
		
		try(BufferedReader br = new BufferedReader(new FileReader(storiesDataFile))) {
			for(String line; (line = br.readLine()) != null; ) {
				String[] parts = line.split(",");
				System.out.println("\n\n****\n" + parts[3] + "\n****\n\n");
				stories.add(
					new Story(Integer.parseInt(parts[0]),
							  parts[1],
							  Integer.parseInt(parts[2]),
							  null
				));
			}
		}
		catch (IOException e) {}
		
		return stories;
	}
	
	public Story getStory(int storyId) {
		
		ArrayList<Story> stories = this.getStories();
		
		for (Story story: stories) {
			if (story.getId() == storyId)
				return story;
		}

		return null;
	}
}
