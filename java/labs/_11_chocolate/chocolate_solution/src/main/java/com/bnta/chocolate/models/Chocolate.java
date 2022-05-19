package com.bnta.chocolate.models;

import javax.persistence.*;

@Entity
@Table(name = "chocolates")
public class Chocolate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String name;
    @Column(name = "cocoa_percentage")
    private int cocoaPercentage;

    @ManyToOne
    @JoinColumn(name = "estate_id", nullable = false)
    private Estate estate;

    public Chocolate(String name, int cocoaPercentage, Estate estate) {
        this.name = name;
        this.cocoaPercentage = cocoaPercentage;
        this.estate = estate;
    }

    public Chocolate() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCocoaPercentage() {
        return cocoaPercentage;
    }

    public void setCocoaPercentage(int cocoaPercentage) {
        this.cocoaPercentage = cocoaPercentage;
    }

    public Estate getEstate() {
        return estate;
    }

    public void setEstate(Estate estate) {
        this.estate = estate;
    }
}
