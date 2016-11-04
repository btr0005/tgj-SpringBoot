package hello;

public class Member {

    private long id;
    private String name;
	private String color;

    public Member(long id, String name, String color) {
        this.id = id;
        this.name = name;
		this.color = color;
    }
	
	public Member(String name) {
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
	
	public String getColor() {
		return color;
	}
}
