package com.example.demo.repo;

import com.example.demo.entity.Car;
import com.example.demo.entity.Make;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

/*
    The DataJpaTest annotation tells Spring to modify how it initializes the
    ApplicationContext: instead of initializing all resources it will just spin
    up the resources needed for the data jpa module to work.

    The ActiveProfiles annotation tells Spring to load the properties of my
    application-test.properties file. The "profile" is whatever comes after
    "application-" in your properties files, and provides a quick and easy way
    to change your configurations as needed
 */
@DataJpaTest
@ActiveProfiles("test")
public class CarRepoTest {
    @Autowired
    private CarRepo repo;

    @BeforeEach
    public void setup(){
        repo.save(Car.builder().color("Red").make(Make.FORD).build());
    }

    @AfterEach
    public void teardown(){
        repo.deleteAll();
    }

    /*
        The two tests below are more for testing my configurations than testing
        the functionality of Spring Data JPA. I configured my car entity to
        auto-generate a UUID, so I want to test that the id actually gets
        generated like I want. I am not testing whether the record gets made
        or not, since that is handled by code I don't "own".

        The second test is for making sure the method I declared in the repo
        interface was set up correctly. Again, Spring handles implementation, but
        I want to make sure that I declared the method signature correctly so that
        Spring can correctly parse it
     */
    @Test
    public void checkUUIDIsCreated(){
        Car generatedCar = repo.findAll().getFirst();
        assertNotNull(generatedCar.getId());
    }

    @Test
    public void getCarByColor(){
        Car retrievedCar = repo.findByColor("Red");
        assertEquals("Red", retrievedCar.getColor());
    }

}
