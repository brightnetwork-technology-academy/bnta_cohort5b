package com.bnta.chocolate.models;

import javax.persistence.*;


public class Chocolate {


    private Long id;


    private String name;

    private int cocoaPercentage;


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
