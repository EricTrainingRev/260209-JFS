package org.revature;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/*
    When using annotation based DI your config needs to tell Spring where to scan your
    app for beans to manage, and then you are done. Spring will handle the rest
 */
@Configuration
@ComponentScan("org.revature")
public class AutowireConfig {}
