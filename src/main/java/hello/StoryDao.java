package hello;

import java.util.ArrayList;
import javax.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;

@Transactional
public interface StoryDao extends CrudRepository<Story, Long> {
	
}
