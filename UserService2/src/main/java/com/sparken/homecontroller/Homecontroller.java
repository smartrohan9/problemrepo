package com.sparken.homecontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sparken.Iservice.Iservice;
import com.sparken.exception.UserNotRegisterd_Exception;
import com.sparken.model.User;

@RestController
@RequestMapping("/homecontroller")
@CrossOrigin("*")
public class Homecontroller {

	@Autowired
	Iservice userservice;

	@GetMapping("/here")
	@LoadBalanced
	public String check111() {
		return "heeiiiiiiii";
	}

	@GetMapping("/getuser")
	public List<User> getuser() {
		return userservice.getsudentdata();
	}
	
	@PostMapping(value = "/registerUser", produces = "application/json", consumes = MediaType.ALL_VALUE)
	public String saveuser(@RequestBody User u) throws UserNotRegisterd_Exception {
		
		return userservice.saveuser(u);
	}
	
	@GetMapping(value = "/getsingleuser/{username}",produces = "application/json",consumes = "application/json")
	public User getsingleuser(@PathVariable String username) {
		
		return userservice.getsingleuser(username);
	}
	
	
	@PutMapping(value = "/updateuser",produces = "application/json",consumes = "application/json")
	public User updateuser(@RequestBody User u) { 
		return userservice.updateuser(u);
	}
	
	@DeleteMapping(value = "/deleteuser/{uname}/{pass}")
	public String deleteuserdata(@PathVariable String uname,@PathVariable String pass )
	{
		return userservice.deleteuserdata(uname,pass);
	}
	
	
	
	
	

}
