package com.sistema.backend_civa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.backend_civa.Entity.Bus;
import com.sistema.backend_civa.Service.BusService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/bus")
@CrossOrigin(origins = "http://localhost:3000") 

public class BusController {
    @Autowired
    private BusService busService;

    @GetMapping
    public List<Bus>obtenerBuses() {
        System.out.println("Obteniendo todos los buses desde el controlador");

        return busService.obtenerBuses();
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000") 
    public ResponseEntity<Bus>obtenerBusesId(@PathVariable Long id){
        return busService.obtenerBusesId(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
    }
    
}
