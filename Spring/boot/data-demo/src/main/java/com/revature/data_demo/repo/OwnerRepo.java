package com.revature.data_demo.repo;

import com.revature.data_demo.entity.Owner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/*
    We can extend the JpaRepository interface and provide it with two generics:
    managed entity -> what class is being interacted with here
    id of the entity -> what type is the primary key for the entity

    Once that is done add your @Repository annotation to the interface, and you
    are done! There is more configuration that can be done, but for just getting
    started this is a minimal setup
 */
@Repository
public interface OwnerRepo extends JpaRepository<Owner, UUID> {
    /*
        Spring can be configured to make custom queries without us needing to proivde
        the actual SQL needed for the query. For instance, the method below tells
        Spring we want to be able to search for an Owner record via its name property.
        We do not need to write the implementation for this, Spring will handle that
        for us.
     */
    Optional<Owner> findByName(String name);
    @Query(value = "select upper(name) from owners", nativeQuery = true)
    List<String> findAndMakeOwnersUppercase();

}
