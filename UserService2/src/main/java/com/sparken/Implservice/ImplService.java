 package com.sparken.Implservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sparken.Idao.LoginDetailsRepository;
import com.sparken.Idao.UserRepository;
import com.sparken.Iservice.Iservice;
import com.sparken.exception.UserNotRegisterd_Exception;
import com.sparken.model.User;


@Service
public class ImplService implements Iservice {

	@Autowired
	UserRepository userrepository;
	
	@Autowired
	LoginDetailsRepository logindetailsrepo;

	@Override
	public List<User> getsudentdata() {

		return (List<User>) userrepository.findAll();
	}

	@Override
	public String saveuser(User u) throws UserNotRegisterd_Exception {

		userrepository.save(u);

		int userid = u.getId();

		String msg = "user not registed please try again";

		User ur1 = userrepository.findAllById(userid);

		if (ur1.getId() == userid) {

			return "User successfully registerd";
		} else {
			throw new UserNotRegisterd_Exception(msg);
		}

	}

	@Override
	public User getsingleuser(String username) {
		
		return (User) userrepository.findAll();
	}



	@Override
	public User updateuser(User u) {
		User new_user=userrepository.save(u);
		return new_user;
	}

	@Override
	public String deleteuserdata(String uname, String pass) {
	
	//	User u=userrepository.FindByUsernameAndPassword(uname,pass);
	User u=	(User) userrepository.findAll();
		if(u!=null) {
			userrepository.delete(u);
		return "Your data Successfully deleted";
		}
		else {
			return "your profile with username"+uname+"and password"+pass+"not found please try again";
		}
		
	}
}
	
	
	


