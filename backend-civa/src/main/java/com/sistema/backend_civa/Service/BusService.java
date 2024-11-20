package com.sistema.backend_civa.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.backend_civa.Entity.Bus;
import com.sistema.backend_civa.Repositorio.BusRepositorio;

@Service
public class BusService {
    @Autowired
    private BusRepositorio busRepositorio;

    public List<Bus>obtenerBuses() {
        return busRepositorio.findAll();
    }

    public Optional<Bus>obtenerBusesId(Long id){
        return busRepositorio.findById(id);
    }
    
}
