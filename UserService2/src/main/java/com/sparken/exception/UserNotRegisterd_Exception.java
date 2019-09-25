package com.sparken.exception;

public class UserNotRegisterd_Exception extends Exception {
	
	private String msg;

	public UserNotRegisterd_Exception(String msg) {
		super();
		this.msg = "User not registed Plese try again";
	}
	


}
