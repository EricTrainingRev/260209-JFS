package com.revature.web_demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebDemoApplication {

	/*
		Typically when working with Spring Boot you will not need to adjust the starting code to run your application.
		As part of the inversion of control Spring provides the starting point for your application. Spring will detect
		what modules you are using and autoconfigure those modules for you. This part of what makes Spring Boot an
		"opinionated" implementation of Spring: you get all the powerful features of Spring, but you also get the
		benefit of Spring automatically configuring your Spring resources to use sensible default configurations. In
		most cases these defaults will be sufficient for your application, but if you find you need to make a change
		to any default settings Spring Boot sets you can always make adjustments
	 */
	public static void main(String[] args) {
		SpringApplication.run(WebDemoApplication.class, args);
	}

}
