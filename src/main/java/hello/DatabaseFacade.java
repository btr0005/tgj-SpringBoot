package hello;

public class DatabaseFacade {
	
	public MembersService membersService;
	
	public DatabaseFacade(MembersService membersService) {
		this.membersService = membersService;
	}
	
	public boolean addMember(Member member) {
		return membersService.addMember(member);
	}
}