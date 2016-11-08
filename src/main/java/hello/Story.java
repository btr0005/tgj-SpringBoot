package hello;

import java.util.List;

public class Story {

    private int id;
    private String name;
	private int perTurnWordLimit;
	private List<StoryUnit> textUnits;

    public Story(int id, String name, int perTurnWordLimit, List<StoryUnit> textUnits) {
        this.id = id;
        this.name = name;
		this.textUnits = textUnits;
		this.perTurnWordLimit = perTurnWordLimit;
    }
	
	public Story(String name, int perTurnWordLimit) {
        this.name = name;
		this.perTurnWordLimit = perTurnWordLimit;
    }
	
	public Story() {}

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
	
	public List<StoryUnit> getTextUnits() {
		return textUnits;
	}
	
	public int getPerTurnWordLimit() {
		return perTurnWordLimit;
	}
}
