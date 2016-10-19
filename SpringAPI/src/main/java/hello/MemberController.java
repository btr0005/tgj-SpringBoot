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

	@CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/join")
    public Greeting join(@RequestParam(value="name", defaultValue="World") String name) {
        
		String message;
		
		if (members.contains(name)) {
			message = "Hello, %s!";
		}
		else {
			message = "Hello, nice to meet you %s!";
			members.add(name);
		}
		
		return new Greeting(counter.incrementAndGet(),
                            String.format(message, name));
    }

}