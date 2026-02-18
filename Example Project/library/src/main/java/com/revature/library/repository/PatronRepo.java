package com.revature.library.repository;

import com.revature.library.entity.Patron;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface PatronRepo extends JpaRepository<Patron, UUID> {
    Optional<Patron> findByUsernameAndPassword(String username, String password);
}
