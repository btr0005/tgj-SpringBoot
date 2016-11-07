package hello;

import java.io.BufferedWriter;
import java.io.BufferedReader;
import java.io.FileWriter;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class MembersServiceFake implements MembersService {

	public final String membersDataFile = "membersData.txt";

    public MembersServiceFake() {}

    public boolean addMember(Member member) {
		BufferedWriter bw = null;
		
		try {
			bw = new BufferedWriter(
						new FileWriter(membersDataFile,	true));
				
			bw.write(member.getId() + "," +
					 member.getName() + "," +
					 member.getColor());
			bw.newLine();
			bw.flush();
			bw.close();
			
		}
		catch (IOException e) {
			return false;
		}
		
		return true;
	}
	
	public ArrayList<Member> getMembers() {
		
		ArrayList<Member> members = new ArrayList<Member>();
		
		try(BufferedReader br = new BufferedReader(new FileReader(membersDataFile))) {
			for(String line; (line = br.readLine()) != null; ) {
				String[] parts = line.split(",");
				members.add(new Member(parts[1],parts[2]));
			}
		}
		catch (IOException e) {}
		
		return members;
	}
}
