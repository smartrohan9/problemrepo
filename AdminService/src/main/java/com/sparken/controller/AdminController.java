package com.sparken.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.sparken.Implservice.Implservice;
import com.sparken.Iservice.Iservice;
@CrossOrigin("*")
@RestController
@RequestMapping("/Admincontroller")

public class AdminController {
	
	@Autowired
	RestTemplate resttemplate;
	
	@Autowired
	Iservice Implservice;
	
	@GetMapping("/here")
	public String check() {
		return "in admin controller";
	}
	
	

}
