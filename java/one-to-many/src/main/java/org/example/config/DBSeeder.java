package org.example.config;

import org.example.model.Customer;
import org.example.model.PurchaseOrder;
import org.example.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

    /*
      A configuration class that implements ApplicationRunner
      Long story short - we put come code in the run method to populate the DB after Spring App is ready.
    */
    @Configuration
    public class DBSeeder implements ApplicationRunner {
        /*
           Spring 'glues' DBSeder with the implementation of CustomerRepository
           provided by the Spring Data Jpa project
        */
        @Autowired
        private CustomerRepository customerRepository;

        @Override
        public void run(ApplicationArguments args) throws Exception {
            Customer c1 = new Customer(null, "Zazil Erhard", "2435 James Avenue, Wichita","207-494-7828","AI4HD93JD", null);
            Customer c2 = new Customer(null, "Knútr Madailéin","1408 Karen Lane, Louisville","816-730-7821","89DJHW3ER", null);
            Customer c3 = new Customer(null, "Oleg Abhinav","1283 Cottonwood Lane, Grand Rapids", "816-730-7821", "S983JDI3", null);
            Customer c4 = new Customer(null, "Tedore Marcelino","472 Golf Course Drive, Reston","816-730-7821","3DD93JD3", null);
            Customer c5 = new Customer(null, "Darina Ragna","3907 Sarah Drive, Lafayette","816-730-7821","D83DN39", null);

            PurchaseOrder o1= new PurchaseOrder(null, LocalDate.now(), "Iphone 8697", 10, BigDecimal.valueOf(11234), c1);
            PurchaseOrder o11= new PurchaseOrder(null, LocalDate.now(), "A bag of cats", 10, BigDecimal.valueOf(500), c1);
            PurchaseOrder o2= new PurchaseOrder(null, LocalDate.now().minusWeeks(1), "Iphone 1000", 1, BigDecimal.valueOf(1124), c2);
            PurchaseOrder o22= new PurchaseOrder(null, LocalDate.now().minusDays(23), "A boat", 1, BigDecimal.valueOf(1234), c2);
            PurchaseOrder o3= new PurchaseOrder(null, LocalDate.now().minusDays(23), "Some books", 100, BigDecimal.valueOf(950), c3);
            PurchaseOrder o33= new PurchaseOrder(null, LocalDate.now().minusYears(1), "Some books", 10, BigDecimal.valueOf(50), c3);
            PurchaseOrder o4= new PurchaseOrder(null, LocalDate.now().minusMonths(2), "Porsche 911", 1, BigDecimal.valueOf(211234), c4);
            PurchaseOrder o44= new PurchaseOrder(null, LocalDate.now(), "Iphone 1000", 1, BigDecimal.valueOf(1124), c4);
            PurchaseOrder o5= new PurchaseOrder(null, LocalDate.now().minusYears(1), "A bag of potatoes", 10, BigDecimal.valueOf(5), c5);
            PurchaseOrder o55= new PurchaseOrder(null, LocalDate.now().minusWeeks(5), "Samsung A500", 10, BigDecimal.valueOf(11230), c5);

            c1.setOrders(List.of(o1,o11));
            c2.setOrders(List.of(o2,o22));
            c3.setOrders(List.of(o3,o33));
            c4.setOrders(List.of(o4,o44));
            c5.setOrders(List.of(o5,o55));
            /*
                Thanks to the 'cascade' attribute we save explicitly only customers

                @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
                private List<PurchaseOrder> orders;
             */
            customerRepository.saveAll(List.of(c1,c2,c3,c4,c5));

        }
    }
