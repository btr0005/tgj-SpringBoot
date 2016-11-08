package hello;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;

@RestController
@RequestMapping("/stories")
public class StoryController {

	private DatabaseFacade dbFacade = new DatabaseFacade(new StoriesServiceFake());

	@CrossOrigin()
    @RequestMapping(method=RequestMethod.POST)
    public String create(@RequestBody Story story) {
		String response;
	
		if (this.dbFacade.addStory(story))
			response = "New story added to db!";
		else
			response = "Failed to add story to db!";
		
		return response;
    }
	
	@CrossOrigin()
	@RequestMapping(method=RequestMethod.GET)
	public Collection<Story> getStories() {
		return this.dbFacade.getStories();
    }
	
	@CrossOrigin()
	@RequestMapping(method=RequestMethod.GET, value = "/{storyId}")
	public Story getStory(@PathVariable int storyId) {
		return this.dbFacade.getStory(storyId);
    }

}