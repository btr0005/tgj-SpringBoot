package hello;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class MembersServiceFake implements MembersService {

	public final String membersDataFile = "membersData.txt";

    public MembersServiceFake() {}

    public boolean addMember(Member member) {
		BufferedWriter bw = null;
		
		try {
			bw = new BufferedWriter(
						new FileWriter(membersDataFile,	true));
				
			bw.write("hi" + member.getName()); //+ "," +
					 //member.getname() + "," +
					// member.getcolor() + "," );
			bw.newLine();
			bw.flush();
			bw.close();
			
		}
		catch (IOException e) {
			return false;
		}
		
		return true;
	}
}
