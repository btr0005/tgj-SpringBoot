package hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;

@RestController
@RequestMapping("/members")
public class MemberController {
	
	private MembersService memberService = new MembersServiceFake();

	@CrossOrigin()
    @RequestMapping(method=RequestMethod.POST)
    public String join(@RequestBody Member member) {
		if (this.memberService.addMember(member))
			return "New member added to db!";
		else
			return "Failed to add member to db!";
    }
	
	@CrossOrigin()
	@RequestMapping(method=RequestMethod.GET)
	public Collection<Member> members() {
		return this.memberService.getMembers();
    }

}