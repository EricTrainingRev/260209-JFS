package com.revature.library.service.core;

import com.revature.library.entity.Patron;
import com.revature.library.exception.AuthFail;
import com.revature.library.exception.LoginFail;
import com.revature.library.repository.AuthorRepo;
import com.revature.library.repository.PatronRepo;
import com.revature.library.utility.JwtUtility;
import io.jsonwebtoken.JwtException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class PatronService {

    private final PatronRepo repo;
    private final JwtUtility jwtUtility;

    public Map<String, String> validateCredentials(Patron credentials){
        String username = credentials.getUsername();
        String password = credentials.getPassword();
        Map<String, String> responseMap = new HashMap<>();
        Optional<Patron> patron = repo.findByUsernameAndPassword(username, password);
        if(patron.isPresent()){
            UUID patronId = patron.get().getId();
            String token = jwtUtility.generateAccessToken(patronId, username);
            responseMap.put("token", token);
            return responseMap;
        }
        throw new LoginFail("Login attempt failed");
    }

    public boolean validateToken(String token){
        if (token == null){
            throw new AuthFail("Token not found");
        }
        try{
            System.out.println(token);
            String id = jwtUtility.extractId(token);
            System.out.println(id);
            String username = jwtUtility.extractUsername(token);
            System.out.println(username);
            Optional<Patron> patron = repo.findById(UUID.fromString(id));
            if(patron.isPresent()){
                Patron foundPatron = patron.get();
                return foundPatron.getId().equals(UUID.fromString(id)) && foundPatron.getUsername().equals(username);
            }
            return false;
        } catch (JwtException e){
            throw new AuthFail("Token could not be parsed");
        }
    }

    public Patron createPatron(Patron patron){
        return repo.save(patron);
    }

}
