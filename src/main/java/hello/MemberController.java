package hello;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;

@RestController
public class MemberController {

    private final AtomicLong counter = new AtomicLong();
	
	private DatabaseFacade dbFacade = new DatabaseFacade(new MembersServiceFake());

	@CrossOrigin()
    @RequestMapping("/join")
    public Greeting join(@RequestParam(value="name") String name,
						 @RequestParam(value="color") String color) {
		String response;
	
		if (this.dbFacade.addMember(new Member(name, color)))
			response = "New member added to db!";
		else
			response = "Failed to add member to db!";
	
		return new Greeting(counter.incrementAndGet(), response);
    }
	
	@CrossOrigin()
	@RequestMapping("/members")
	public Collection<Member> members() {
		return this.dbFacade.getMembers();
    }

}