package org.revature;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main(String[] args) {

    }

    public static void springWithXML(){
        ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
    }
}
