package hello;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "storyunit")
public class StoryUnit {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@NotNull
	private long authorId;
	
	@NotNull
	private long storyId;
	
	@NotNull
	private String text;
	
	@Transient
	private Member author;
	
	public StoryUnit() {}
	
	public StoryUnit(long id) { 
		this.id = id;
	}
	
	public StoryUnit(long authorId, long storyId, String text) {
		this.authorId = authorId;
		this.storyId = storyId;
		this.text = text;
	}
	
	public StoryUnit(Member author, String text) {
		this.authorId = author.getId();
		this.text = text;
	}

	public long getId() {
		return id;
	}

	public void setId(long value) {
		this.id = value;
	}
	
	public String getText() {
		return text;
	}
	
	public void setText(String value) {
		this.text = value;
	}
	
	public long getAuthorId() {
		return authorId;
	}
	
	public void setAuthorId(long value) {
		this.authorId = value;
	}
	
	public long getStoryId() {
		return storyId;
	}
	
	public void setStoryId(long value) {
		this.storyId = value;
	}	
}
