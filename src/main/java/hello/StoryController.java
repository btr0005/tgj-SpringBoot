package hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;

@RestController
@RequestMapping("/stories")
public class StoryController {

	private StoriesService storiesService = new StoriesServiceFake();

	@CrossOrigin()
    @RequestMapping(method=RequestMethod.POST)
    public String create(@RequestBody Story story) {
		if (this.storiesService.addStory(story))
			return "New story added to db!";
		else
			return "Failed to add story to db!";
    }
	
	@CrossOrigin()
	@RequestMapping(method=RequestMethod.GET)
	public Collection<Story> getStories() {
		return this.storiesService.getStories();
    }
	
	@CrossOrigin()
	@RequestMapping(method=RequestMethod.GET, value = "/{storyId}")
	public Story getStory(@PathVariable int storyId) {
		return this.storiesService.getStory(storyId);
    }

}