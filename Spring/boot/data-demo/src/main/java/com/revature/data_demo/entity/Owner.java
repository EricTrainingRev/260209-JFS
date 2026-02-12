package com.revature.data_demo.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity // tells Spring/Hibernate this is a managed entity
@Table(name = "owners") // here I am specifying the table name should be "owners
// NOTE: if I left off the Table annotation the entity would still be managed
public class Owner {
    @Id // this sets the field as the primary key of the entity
    // The annotation below tells Spring to create a UUID and add it to the entity
    // before it is passed to Hibernate when creating an Owner record
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;
}
