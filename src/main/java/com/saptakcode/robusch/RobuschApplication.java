package com.saptakcode.robusch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class RobuschApplication {

	public static void main(String[] args) {
		SpringApplication.run(RobuschApplication.class, args);
	}

}
