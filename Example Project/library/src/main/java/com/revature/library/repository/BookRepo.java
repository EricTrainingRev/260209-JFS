package com.revature.library.repository;

import com.revature.library.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface BookRepo extends JpaRepository<Book, UUID> {
}
