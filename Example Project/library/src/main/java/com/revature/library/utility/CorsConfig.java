package com.revature.library.utility;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // addMapping sets the route pattern to be allowed
        registry.addMapping("/**")
                // allowedOriginPatterns sets the acceptable origins of the request
                .allowedOriginPatterns("http://localhost:4200")
                // allowedMethods sets the allowe request methods
                .allowedMethods("POST", "GET");
    }
}
