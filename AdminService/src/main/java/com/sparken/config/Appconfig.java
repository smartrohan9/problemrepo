package com.sparken.config;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;



@Configuration
@ComponentScan("com")
public class Appconfig implements Filter{

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		 HttpServletResponse response1 = (HttpServletResponse) response;
	        response1.setHeader("Access-Control-Allow-Origin", "*");
	        response1.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE, PATCH");
	        response1.setHeader("Access-Control-Max-Age", "3600");
	        response1.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	        response1.setHeader("Access-Control-Expose-Headers", "Location");
	        chain.doFilter(request, response);
		
	}
	@Override
    public void init(FilterConfig filterConfig) {}

    @Override
    public void destroy() {}

}
