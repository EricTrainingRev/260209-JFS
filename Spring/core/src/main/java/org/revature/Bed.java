package org.revature;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("bed")
public class Bed {

    private Blanket blanket;

    /*
        The @Autowired here is redundant, but included to make it clear how Spring is managing this bean. Spring
        will look for a Blanket object and inject it into the constructor when it is instantiating this bean. Spring
        wants to do constructor injection by default, hence the @Autowired in this instance is not necessary
     */
    @Autowired
    public Bed(Blanket blanket) {
        this.blanket = blanket;
    }

    public Blanket getBlanket(){
        return blanket;
    }
}
