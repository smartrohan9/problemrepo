package com.sparken.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EnableEurekaServer

public class WebService3Application {

	public static void main(String[] args) {
		SpringApplication.run(WebService3Application.class, args);
	}

}
