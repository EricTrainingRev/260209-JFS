package org.revature;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main(String[] args) {
        springWithXML();
    }

    public static void springWithXML(){
        // Here we initialize an XML based Application Context and tell it where our xml config is located
        ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
        // Here we use the getBean method and reference the bean name property set in the xml config to pull
        // it out of the application context
        Blanket blanket = (Blanket) context.getBean("blanket");
        System.out.println(blanket.getType());
        Bed bed = (Bed) context.getBean("bed");
        System.out.println(bed);
        System.out.println(bed.getBlanket().getType());
    }
}
