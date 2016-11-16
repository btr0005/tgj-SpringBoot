package hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@RestController
@RequestMapping("/stories")
public class StoryController {

	@Autowired
	private StoryDao storyDao;

	@Autowired
	private StoryUnitDao storyUnitDao;

	@CrossOrigin()
	@RequestMapping("/create")
	@ResponseBody
	public String create(String name, int perTurnWordLimit) {
		
		Story story = new Story(name, perTurnWordLimit);
		
		StoryUnit unit1 = new StoryUnit(1, 1, "Once upon");
		StoryUnit unit2 = new StoryUnit(1, 1, "a time");
		StoryUnit unit3 = new StoryUnit(1, 1, "there was");
		
		try {
			storyDao.save(story);
			storyUnitDao.save(unit1);
			storyUnitDao.save(unit2);
			storyUnitDao.save(unit3);
		}
		catch (Exception ex) {
		  return "Error creating the story: " + ex.toString();
		}
		return "Story succesfully created! (id = " + story.getId() + ")";
	}	
	
	@CrossOrigin()
    @RequestMapping(method=RequestMethod.POST)
    public String create(@RequestBody Story story) {
		
		List<StoryUnit> storyUnits = story.getStoryUnits();
		System.out.println("\n\n\nStory: " + story.getName() + 
							story.getPerTurnWordLimit()
							+ "\n\n\n");
		
		try {
			storyDao.save(story);
			for (StoryUnit storyUnit : storyUnits) {
				storyUnit.setStoryId(story.getId());
				storyUnitDao.save(storyUnit);
			}
			
		} catch (Exception ex) {
		  return "Error creating the story: " + ex.toString();
		}
		return "Story succesfully created! (id = " + story.getId() + ")";
    }
	
	@CrossOrigin()
	@RequestMapping(method=RequestMethod.GET)
	public Iterable<Story> getStories() {
		return storyDao.findAll();
    }
	
	@CrossOrigin()
	@RequestMapping(method=RequestMethod.GET, value = "/{storyId}")
	public Story getStory(@PathVariable int storyId) {
		return storyDao.findById(storyId);
    }

}