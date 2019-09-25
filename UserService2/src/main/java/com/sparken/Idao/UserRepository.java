package com.sparken.Idao;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.sparken.model.User;

public interface UserRepository extends CrudRepository<User,Integer> {

	
	User findAllById(int userid);

//	User findByUsername(String username);
	
	
  //  @Query("SELECT u FROM User u WHERE u.username =?1 AND u.password=?2")
//	User FindByUsernameAndPassword(String uname, String pass);

}
