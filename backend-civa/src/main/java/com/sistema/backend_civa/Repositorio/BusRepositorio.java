package com.sistema.backend_civa.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistema.backend_civa.Entity.Bus;
@Repository
public interface BusRepositorio extends JpaRepository<Bus,Long>{
    
}
