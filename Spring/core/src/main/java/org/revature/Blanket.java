package org.revature;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/*
    We tell Spring in the beans.xml config to use setter injection to set the Blanket type field. The name of the
    property tag needs to match the field name, and the value is passed to the setter method to actually inject
    the data
 */
/*
    The component annotation makes the class a target for component scanning: use this if you want to use annotation based
    configuration (which you should)
 */
@Component("blanket")
public class Blanket {
    private String type;

    public String getType(){
        return type;
    }

    // since we need to specify the value to inject we use the @Value annotation and provide the argument
    @Value("Throw")
    public void setType(String type){
        this.type = type;
    }
}
