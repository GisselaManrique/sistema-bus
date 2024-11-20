package com.sistema.backend_civa.Entity;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "bus")
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBus;
    @Column(name = "num_bus",nullable = false)
    private Integer numBus;
    @Column(name = "placa_bus",nullable = false,unique = true,length = 7)
    private String placaBus;
    @Column(name = "fecha_Creacion_bus",nullable = false,updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaCreacionBus=new Date();
    @Column(name = "carct_bus",nullable = false, length = 50)
    private String carctBus;
    @Column(name = "activo_bus")
    private Boolean activoBus;
    
    @ManyToOne
    @JoinColumn(name = "idmarca_bus",nullable = false)
    private MarcaBus marcaBus; 
}



