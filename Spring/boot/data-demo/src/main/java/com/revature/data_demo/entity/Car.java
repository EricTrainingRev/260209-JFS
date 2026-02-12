package com.revature.data_demo.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.revature.data_demo.utility.Make;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Fetch;

import java.util.UUID;

@Data
@Entity
@Table(name = "cars")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String color;
    @Enumerated(EnumType.STRING)
    private Make make;
    /*
        The ManyToOne annotation tells Spring the Car entity has a foreign key
        relationship with the Owner entity. Because we have already provided configuration
        for the Owner table we do not need to provide that redundant detail here
     */
    @ManyToOne
    /*
        JoinColumn tells Spring how to handle the foreign key column. In this case
        we want to make it so the name of the column is "owner_id". Spring will handle
        making the foreign key relationship for us
     */
    @JoinColumn(name = "owner_id")
    @JsonBackReference
    private Owner owner;
}
