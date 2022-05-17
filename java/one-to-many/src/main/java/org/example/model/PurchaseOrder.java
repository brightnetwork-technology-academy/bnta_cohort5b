package org.example.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
public class PurchaseOrder {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private LocalDate localDate;
        private String product;
        private int quantity;
        private BigDecimal orderAmount;

        @ManyToOne
        private Customer customer;

        public PurchaseOrder() {
        }

        public PurchaseOrder(Long id, LocalDate localDate, String product, int quantity, BigDecimal orderAmount, Customer customer) {
                this.id = id;
                this.localDate = localDate;
                this.product = product;
                this.quantity = quantity;
                this.orderAmount = orderAmount;
                this.customer = customer;
        }

        public Long getId() {
                return id;
        }

        public void setId(Long id) {
                this.id = id;
        }

        public LocalDate getLocalDate() {
                return localDate;
        }

        public void setLocalDate(LocalDate localDate) {
                this.localDate = localDate;
        }

        public String getProduct() {
                return product;
        }

        public void setProduct(String product) {
                this.product = product;
        }

        public int getQuantity() {
                return quantity;
        }

        public void setQuantity(int quantity) {
                this.quantity = quantity;
        }

        public BigDecimal getOrderAmount() {
                return orderAmount;
        }

        public void setOrderAmount(BigDecimal orderAmount) {
                this.orderAmount = orderAmount;
        }

        public Customer getCustomer() {
                return customer;
        }

        public void setCustomer(Customer customer) {
                this.customer = customer;
        }
}
