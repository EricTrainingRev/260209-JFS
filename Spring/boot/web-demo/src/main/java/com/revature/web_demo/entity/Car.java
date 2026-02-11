package com.revature.web_demo.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.stereotype.Component;

/*
    The @Data annotation generates the following resources for the class:
    - full args constructor
    - getter/setter methods for all non-final fields
    - toString
    - equals
    - hash
 */
@Data
@NoArgsConstructor
public class Car {

    private int age;
    @NonNull // this tells Lombok the field should not be null
    private String color;
    private String make;

    /*
        All the code below gets generated at run time by Lombok. The beauty of this
        is any refactoring gets automatically reflected in our code since the
        boilerplate resources are automagically generated for us. This significantly
        simplifies refactoring and creating our entity code since we no longer need
        to worry about manually adding the boilerplate
     */
//    public Car(int age, String color, String make) {
//        this.age = age;
//        this.color = color;
//        this.make = make;
//    }
//
//    public int getAge() {
//        return age;
//    }
//
//    public void setAge(int age) {
//        this.age = age;
//    }
//
//    public String getColor() {
//        return color;
//    }
//
//    public void setColor(String color) {
//        this.color = color;
//    }
//
//    public String getMake() {
//        return make;
//    }
//
//    public void setMake(String make) {
//        this.make = make;
//    }
//
//    @Override
//    public boolean equals(Object o) {
//        if (o == null || getClass() != o.getClass()) return false;
//        Car car = (Car) o;
//        return getAge() == car.getAge() && Objects.equals(getColor(), car.getColor()) && Objects.equals(getMake(), car.getMake());
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(getAge(), getColor(), getMake());
//    }
//
//    @Override
//    public String toString() {
//        return "Car{" +
//                "age=" + age +
//                ", color='" + color + '\'' +
//                ", make='" + make + '\'' +
//                '}';
//    }
}
