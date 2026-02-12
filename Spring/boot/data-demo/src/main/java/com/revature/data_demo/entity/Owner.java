package com.revature.data_demo.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
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
    /*
        If you want an entity that owns others to reflect it when it is grabbed
        from the database (it does not change the table structure). If you set
        the generic type for the list, that should provide Spring with all
        the data it needs to grab all owned records when you query records for the
        given entity
     */
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "owner")
    @JsonManagedReference
    private List<Car> cars;
}
