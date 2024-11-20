package com.sistema.backend_civa.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "marcabus")
public class MarcaBus {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long idmarcaBus;
    @Column(name = "nom_bus",nullable = false,length = 25)
    private String nomBus;
}
