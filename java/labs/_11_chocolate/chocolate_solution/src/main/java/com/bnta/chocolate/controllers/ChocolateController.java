package com.bnta.chocolate.controllers;

import com.bnta.chocolate.models.Chocolate;
import com.bnta.chocolate.repositories.ChocolateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("chocolates")
public class ChocolateController {

    @Autowired
    ChocolateRepository chocolateRepository;

//    Handles following:
//    * GET /chocolates
//    * GET /chocolates/:id
//    * GET /chocolates?cocoaPercentage=69
    @GetMapping
    public ResponseEntity<List<Chocolate>> getAllChocolatesAndFilters(
            @RequestParam(required = false, name = "cocoaPercentage") Integer cocoaPercentage
    ){
//        GET /chocolates?cocoaPercentage=69
        if(cocoaPercentage != null){
            return new ResponseEntity<>(chocolateRepository.findByCocoaPercentageGreaterThan(cocoaPercentage), HttpStatus.OK);
        }
//        GET /chocolates
        return new ResponseEntity<>(chocolateRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Optional<Chocolate>> getChocolate(@PathVariable Long id){
        return new ResponseEntity(chocolateRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<List<Chocolate>> postChocolate(@RequestBody Chocolate chocolate){
        chocolateRepository.save(chocolate);
        return new ResponseEntity<>(chocolateRepository.findAll(), HttpStatus.CREATED);
    }


}
