package hello;

public class StoryUnit {
	
	private Member author;
	private String text;
	
	public StoryUnit() {}
	
	public StoryUnit(Member author, String text) {
		this.author = author;
		this.text = text;
	}
	
	public Member getAuthor() {
		return this.author;
	}
	
	public String text() {
		return this.text;
	}
}
