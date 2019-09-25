package com.sparken.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.cloud.netflix.zuul.EnableZuulServer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication(scanBasePackages="com")
@EnableZuulProxy
@ComponentScan(basePackages = "com")
@EnableJpaRepositories(basePackages = "com")
@EnableAutoConfiguration
@EntityScan(basePackages = "com")
@CrossOrigin("*")
public class WebService2Application {

	@LoadBalanced
	public static void main(String[] args) {
		SpringApplication.run(WebService2Application.class, args);
	}

}
