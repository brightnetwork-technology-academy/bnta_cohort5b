package com.bnta.chocolate.components;

import com.bnta.chocolate.models.Chocolate;
import com.bnta.chocolate.models.Estate;
import com.bnta.chocolate.repositories.ChocolateRepository;
import com.bnta.chocolate.repositories.EstateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ChocolateRepository chocolateRepository;

    @Autowired
    EstateRepository estateRepository;

    public DataLoader(){

    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        // RABOT ESTATE
        Estate rabotEstate = new Estate("Rabot Estate", "St Lucia");
        estateRepository.save(rabotEstate);

        Chocolate saltedDark = new Chocolate("Salted Dark", 70, rabotEstate);
        chocolateRepository.save(saltedDark);

        Chocolate supermilkHazelnut = new Chocolate("Supermilk Hazelnut", 40, rabotEstate);
        chocolateRepository.save(supermilkHazelnut);

        // HACIENDA ZOLITA
        Estate haciendaZolita = new Estate("Hacienda Zolita", "Ecuador");
        estateRepository.save(haciendaZolita);

        Chocolate ecuadorDark = new Chocolate("Ecuador Dark", 72, haciendaZolita);
        chocolateRepository.save(ecuadorDark);

        Chocolate mintyLove = new Chocolate("Minty Love", 72, haciendaZolita);
        chocolateRepository.save(mintyLove);

        // DIVINE
        Estate kuapaKokoo = new Estate("Kuapa Kokoo", "Ghana");
        estateRepository.save(kuapaKokoo);

        Chocolate pinkSalt = new Chocolate("Dark Pink Himalayan Salt", 60, kuapaKokoo);
        chocolateRepository.save(pinkSalt);


    }
}
