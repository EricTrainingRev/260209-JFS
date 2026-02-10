package org.revature;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

/*
    This is how you can programmatically configure Spring to use your beans. You pass this config class to the
    Application context and it will use the Bean methods you provide and any other configurations you set when
    running your application. Note that Spring is doing a little more work for us automagically: unlike in the xml
    configuration we do not need to specify that the Blanket bean being created needs to be passed to the Bed
    bean: Spring detects the two are compatible and injects the bean accordingly
 */
@Configuration
public class Config {

    @Bean(name = "blanket")
    @Scope("singleton")
    public Blanket blanketMaker(){
        Blanket blanket = new Blanket();
        blanket.setType("Throw");
        return blanket;
    }

    @Bean(name = "bed")
    public Bed bedMaker(Blanket blanket){
        return new Bed(blanket);
    }

}
