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
@RequestMapping("/members")
public class MemberController {

    private final AtomicLong counter = new AtomicLong();
	
	private DatabaseFacade dbFacade = new DatabaseFacade(new MembersServiceFake());

	@CrossOrigin()
    @RequestMapping(method=RequestMethod.POST)
    public String join(@RequestBody Member member) {
		String response;
	
		if (this.dbFacade.addMember(member))
			response = "New member added to db!";
		else
			response = "Failed to add member to db!";
		
		return response;
    }
	
	@CrossOrigin()
	@RequestMapping(method=RequestMethod.GET)
	public Collection<Member> members() {
		return this.dbFacade.getMembers();
    }

}