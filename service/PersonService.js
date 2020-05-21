'use strict';

let sqlDb;
exports.personTableSetup = function(connection) {
  sqlDb = connection;
  console.log("Checking if the persons table exist");
  return sqlDb.schema.hasTable("persons").then((exists) => {
    if(!exists){
      console.log("The persons table doesn't exist");
    } else {
      console.log("Persons table exists!");
    }
  })
}

/**
 * Get the list of the persons (volunteers) of the association
 * Retrieves the names, descriptions, and details of all the persons in the association.
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 5 and cannot exceed 100. (optional)
 * returns Persons
 **/
exports.personsGET = function(offset,limit) {
  return sqlDb("persons").limit(limit).offset(offset).then(data => {
    return data;
    })
}


/**
 * Get the information of a person in the association by providing his or her ID
 * Retrieves the name, description, and UUID of a person by specifying its UUID.
 *
 * id String The UUID of the person to retrieve
 * returns Person
 **/
exports.personsIdGET = function(ID) {
  return sqlDb("persons").where({
    id: ID
  }).then(data => {
    return data;
    })
}


/**
 * Get the list of Events Associated with a Person
 * Retrieves a collection of Events associated with a specified Person.
 *
 * id String The UUID of the person to retrieve related Events for
 * returns Events
 **/
exports.personsIdRelated_EventsGET = function(ID) {
  return sqlDb("events").whereIn('id',function() {
    this.select("eventID").from("contact").where({
      personID: ID
    })
  }).then(data => {
    return data;
  })
}


/**
 * Get the list of Services Associated with a Person
 * Retrieves a list of Services associated with a specified Person.
 *
 * id String The UUID of the person to retrieve services for
 * returns Services
 **/
exports.personsIdRelated_servicesGET = function(ID) {
  return sqlDb("services").whereIn('id',function() {
    this.select("serviceID").from("involve").where({
      personID: ID
    })
  }).then(data => {
    return data;
  })
}

