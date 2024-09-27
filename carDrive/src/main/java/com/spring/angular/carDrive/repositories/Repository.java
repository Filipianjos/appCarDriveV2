package com.spring.angular.carDrive.repositories;

import com.spring.angular.carDrive.models.Client;
import org.springframework.data.repository.CrudRepository;

@org.springframework.stereotype.Repository

public interface Repository extends CrudRepository<Client, Long> {
}
