package org.example.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String customer;
    private String customerAddress;
    private String customerPhone;
    private String taxID;

    /*
        @OneToMany defines the relationship.
        mappedBy attribute: indicates that the entity in this side is the inverse of the relationship.
        The owner (the entity that has the foreign key) is PurchaseOrder

        cascade = CascadeType.ALL attribute: Hibernate will propagate all actions
        e.g. in DBSeeder we save a customer with a List of PurchaseOrders - we don't need to manually save them as
        Hibernate will make sure all the orders from the list will be saved to the corresponding table.
     */
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<PurchaseOrder> orders;

    public Customer() {
    }

    public Customer(Long id, String customer, String customerAddress, String customerPhone, String taxID, List<PurchaseOrder> orders) {
        this.id = id;
        this.customer = customer;
        this.customerAddress = customerAddress;
        this.customerPhone = customerPhone;
        this.taxID = taxID;
        this.orders = orders;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

    public String getCustomerPhone() {
        return customerPhone;
    }

    public void setCustomerPhone(String customerPhone) {
        this.customerPhone = customerPhone;
    }

    public String getTaxID() {
        return taxID;
    }

    public void setTaxID(String taxID) {
        this.taxID = taxID;
    }

    public List<PurchaseOrder> getOrders() {
        return orders;
    }

    public void setOrders(List<PurchaseOrder> orders) {
        this.orders = orders;
    }
}
