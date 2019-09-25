package com.sparken.Idao;

import org.springframework.data.repository.CrudRepository;

import com.sparken.model.Logindetails;
import com.sparken.model.User;

public interface LoginDetailsRepository extends CrudRepository<Logindetails,Integer>{

	//User findByUsername(String username);

	//User FindByUsernameAndPassword(String uname, String pass);

}
