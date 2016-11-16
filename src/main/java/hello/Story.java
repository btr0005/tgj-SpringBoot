package hello;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import java.util.List;

@Entity
@Table(name = "stories")
public class Story {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
	
	@NotNull
    private String name;
	
	@NotNull
	private int perTurnWordLimit;
	
	@Transient
	private List<StoryUnit> storyUnits;

	public Story() {}
	
	public Story(long id) { 
		this.id = id;
	}
	
	public Story(String name, int perTurnWordLimit) {
        this.name = name;
		this.perTurnWordLimit = perTurnWordLimit;
    }
	
	public Story(String name, int perTurnWordLimit, List<StoryUnit> storyUnits) {
        this.name = name;
		this.perTurnWordLimit = perTurnWordLimit;
		this.storyUnits = storyUnits;
    }

    public long getId() {
        return id;
    }
	
	public void setId(long value) {
		this.id = value;
	}
	
    public String getName() {
        return name;
    }
	
	public void setName(String value) {
		this.name = value;
	}	
	
	public int getPerTurnWordLimit() {
		return perTurnWordLimit;
	}
	
	public void setPerTurnWordLimit(int value) {
		this.perTurnWordLimit = value;
	}
		
	public List<StoryUnit> getStoryUnits() {
		return storyUnits;
	}
	
	public void setStoryUnits(List<StoryUnit> storyUnits) {
		this.storyUnits = storyUnits;
	}
}
