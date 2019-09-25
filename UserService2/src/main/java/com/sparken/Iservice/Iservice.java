package com.sparken.Iservice;

import java.util.List;

import com.sparken.exception.UserNotRegisterd_Exception;
import com.sparken.model.User;

public interface Iservice {

	List<User> getsudentdata();

	String  saveuser(User u) throws UserNotRegisterd_Exception;

	User getsingleuser(String username);

	User updateuser(User u);

	String deleteuserdata(String uname, String pass);

}
