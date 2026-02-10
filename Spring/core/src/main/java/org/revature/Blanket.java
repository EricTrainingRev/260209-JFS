package org.revature;

/*
    We tell Spring in the beans.xml config to use setter injection to set the Blanket type field. The name of the
    property tag needs to match the field name, and the value is passed to the setter method to actually inject
    the data
 */
public class Blanket {
    private String type;

    public String getType(){
        return type;
    }

    public void setType(String type){
        this.type = type;
    }
}
