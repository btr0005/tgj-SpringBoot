package hello;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "members")
public class Member {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
	
	@NotNull
    private String name;
	
	@NotNull
	private String color;
	
	public Member() {}
	
	public Member(String name, String color) {
        this.name = name;
		this.color = color;
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
	
	public String getColor() {
		return color;
	}
	
	public void setColor(String value) {
		this.color = value;
	}
}
