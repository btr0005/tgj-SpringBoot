package hello;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;

@RestController
public class MemberController {

    private final AtomicLong counter = new AtomicLong();
	private ArrayList<String> members = new ArrayList<String>();
	
	private DatabaseFacade dbFacade = new DatabaseFacade(new MembersServiceFake());

	@CrossOrigin()
    @RequestMapping("/join")
    public Greeting join(@RequestParam(value="name") String name) {
		String response;
	
		if (this.dbFacade.addMember(new Member(name)))
			response = "New member added to db!";
		else
			response = "Failed to add member to db!";
	
		return new Greeting(counter.incrementAndGet(), response);
    }

}