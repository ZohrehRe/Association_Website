'use strict';

let sqlDb;
exports.serviceTableSetup = function(connection) {
  sqlDb = connection;
  console.log("Checking if the services table exist");
  return sqlDb.schema.hasTable("services").then((exists) => {
    if(!exists){
      console.log("The service table doesn't exist");
    } else {
      console.log("Services table exists!");
    }
  })
}

/**
 * Get a list of available services of the association
 * Retrieves the names, descriptions, and details of the all services.
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 5 and cannot exceed 100. (optional)
 * returns Services
 **/
exports.servicesGET = function(offset,limit) {
  return sqlDb("services").limit(limit).offset(offset).then(data => {
    return data;
    })
}


/**
 * Get the details of a Service by ID
 * Retrieves the name, description, and details of a service by specifying its UUID.
 *
 * id String The UUID of the service to retrieve
 * returns Service
 **/
exports.servicesIdGET = function(ID) {
  return sqlDb("services").where({
    id: ID
  }).then(data => {
    return data;
    })
}


/**
 * Get the list of Events Associated with a Service
 * Retrieves a collection of Events associated with a specified Service.
 *
 * id String The UUID of the service to retrieve related Events for
 * returns Events
 **/
exports.servicesIdRelated_eventsGET = function(ID) {
  return sqlDb("events").whereIn('id',function() {
    this.select("eventID").from("present").where({
      serviceID: ID
    })
  }).then(data => {
    return data;
  })
}


/**
 * Get the list of Persons Associated with a Service
 * Retrieves a list of Persons associated with a specified Service.
 *
 * id String The UUID of the service to retrieve Persons for
 * returns Persons
 **/
exports.servicesIdRelated_personsGET = function(ID) {
  return sqlDb("persons").whereIn('id',function() {
    this.select("personID").from("involve").where({
      serviceID: ID
    })
  }).then(data => {
    return data;
  })
}

