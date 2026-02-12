package com.revature.data_demo.controller;

import com.revature.data_demo.entity.Owner;
import com.revature.data_demo.repo.OwnerRepo;
import jakarta.transaction.Transactional;
import jakarta.websocket.server.PathParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/owner")
public class OwnerController {

    private final OwnerRepo repo;

    @PostMapping
    public Owner createOwner(@RequestBody Owner owner){
        /*
            Note we are calling a method we did not define on a field that is
            set to an Interface type: Spring will create a concrete class at runtime
            for our Repo that has access to a large collection of methods that are
            implemented via Hibernate. This is why we had to first set the Hibernate
            and Spring Data properties in the properties file: it provides configuration
            instructions for Spring and Hibernate to know how to implement methods like
            the save() method.
         */
        return repo.save(owner);
    }

    @GetMapping
    public List<Owner> getAllOwners(){
        return repo.findAll();
    }

    @GetMapping("/{owner}")
    public Owner getOwnerByName(@PathVariable("owner") String owner){
        Optional<Owner> possibleOwner = repo.findByName(owner);
        if(possibleOwner.isPresent()){
            return possibleOwner.get();
        } else {
            return new Owner();
        }
    }

    @GetMapping("/all")
    public List<String> getAllOwnerNamesUppercase(){
        return repo.findAndMakeOwnersUppercase();
    }

    @PutMapping
    @Transactional(Transactional.TxType.REQUIRED)
    public List<Owner> allFailTogether(){
        Owner ownerOne = new Owner();
        ownerOne.setName("Sally");
        Owner ownerTwo = new Owner();
        ownerTwo.setName("Billy");
        repo.save(ownerOne);
        repo.save(ownerTwo);
        throw new RuntimeException("manually failing route");
//        return repo.findAll();
    }

}
