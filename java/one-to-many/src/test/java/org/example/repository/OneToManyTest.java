package org.example.repository;


import org.example.model.Customer;
import org.example.model.PurchaseOrder;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

/*
This test class is very similar to a pure JUnit test, although it has some additional superpowers.

  @SpringBootTest - start a Spring context before the tests and
  @Autowired    - inject the repositories inside the test so that we can call/ test some methods

  H2 database is populated with DBSeeder before the tests.

*/
@SpringBootTest
class OneToManyTest {

    @Autowired
    private PurchaseOrderRepository orderRepository;
    @Autowired
    private CustomerRepository  customerRepository;


    @Test
    public void customerRepository_findAll_shouldReturn5Customers() {
        assertEquals(5, customerRepository.findAll().size());
    }

    @Test
    public void orderRepository_findAll_shouldReturn10Orders() {
        assertEquals(10, orderRepository.findAll().size());
    }

    @Test
    /*
        We need @Transactional to allow Hibernate to load the orders
        Please note that CUSTOMER table does not have the id to PURCHASE_ORDER

        Comment out  @Transactional to see what will happen
     */
    @Transactional
    public void customerWithId1_shouldHaveAnIphoneAndABagOfCats() {
        Customer customer1 = customerRepository.findById(1l).get();

        assertAll("Customr with id 1 should have 2 orders: an iphone and a bag of cats",
            ()-> assertEquals(2, customer1.getOrders().size()),
            ()-> assertEquals("Iphone 8697", customer1.getOrders().get(0).getProduct()),
            ()-> assertEquals("A bag of cats", customer1.getOrders().get(1).getProduct())
        );
    }

    @Test
    public void orderWitId1_shouldHaveCustomerWithId1() {
        PurchaseOrder purchaseOrder1 = orderRepository.findById(1l).get();
        assertEquals(1, purchaseOrder1.getCustomer().getId());
    }

}