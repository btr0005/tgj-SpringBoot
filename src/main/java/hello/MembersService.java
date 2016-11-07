package hello;

import java.util.ArrayList;

public interface MembersService {
	
	public boolean addMember(Member member);
	public ArrayList<Member> getMembers();
	//public Member getMember(int id);
	
}