package hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.util.Collection;

@RestController
@RequestMapping("/members")
public class MemberController {
	
	@Autowired
	private MemberDao memberDao;
	
	@RequestMapping("/create")
	@ResponseBody
	public String create(String name, String color) {
		Member member = null;
		try {
		  member = new Member(name, color);
		  memberDao.save(member);
		}
		catch (Exception ex) {
		  return "Error creating the member: " + ex.toString();
		}
		return "Member succesfully created! (id = " + member.getId() + ")";
	}
	
	@CrossOrigin()
    @RequestMapping(method=RequestMethod.POST)
    public String join(@RequestBody Member member) {
		try {
			memberDao.save(member);
		}
		catch (Exception ex) {
		  return "Error creating the member: " + ex.toString();
		}
		return "Member succesfully created! (id = " + member.getId() + ")";
    }
	
	@CrossOrigin()
	@RequestMapping(method=RequestMethod.GET)
	public Iterable<Member> members() {
		return memberDao.findAll();
    }
}