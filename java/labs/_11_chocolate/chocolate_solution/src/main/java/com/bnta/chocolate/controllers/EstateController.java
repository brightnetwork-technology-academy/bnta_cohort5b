package com.bnta.chocolate.controllers;

import com.bnta.chocolate.models.Chocolate;
import com.bnta.chocolate.models.Estate;
import com.bnta.chocolate.repositories.EstateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("estates")
public class EstateController {

    @Autowired
    EstateRepository estateRepository;

//    GET
    @GetMapping
    public ResponseEntity<List<Estate>> getAllEstates(){
        return new ResponseEntity(estateRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Optional<Estate>> getEstate(@PathVariable Long id){
        return new ResponseEntity(estateRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<List<Estate>> postEstate(@RequestBody Estate estate){
        estateRepository.save(estate);
        return new ResponseEntity(estateRepository.findAll(), HttpStatus.CREATED);
    }

}
