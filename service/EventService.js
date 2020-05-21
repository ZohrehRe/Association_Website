'use strict';

let sqlDb;
exports.eventTableSetup = function(connection) {
  sqlDb = connection;
  console.log("Checking if the events table exist");
  return sqlDb.schema.hasTable("events").then((exists) => {
    if(!exists){
      console.log("The events table doesn't exist");
    } else {
      console.log("Events table exists!");
    }
  })
}

/**
 * Get all the events of a specific month
 * Provide the name of the month of interest and get all the events related to that month.
 *
 * month String The name of the month of interest to retrive the related events
 * returns Events
 **/
exports.eventsBymonthMonthGET = function(month) {
  return sqlDb("events").where({
    startmonth: month
  }).then(data => {
    return data;
    })
}


/**
 * Get the list of Events of the association
 * Retrieves the names, descriptions, and details of the all events.
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 5 and cannot exceed 100. (optional)
 * returns Events
 **/
exports.eventsGET = function(offset,limit) {
  return sqlDb("events").limit(limit).offset(offset).then(data => {
     return data;
     })
}


/**
 * Get the details of an Event by providing it's ID
 * Retrieves the name, description, and details of an event by specifying its UUID.
 *
 * id String The UUID of the event to retrieve
 * returns Event
 **/
exports.eventsIdGET = function(ID) {
  return sqlDb("events").where({
    id: ID
  }).then(data => {
    return data;
    })
}


/**
 * Get the list of the Persons Associated with an Event
 * Retrieves a list of Persons associated with a specific Event.
 *
 * id String The UUID of the event to retrieve persons for
 * returns Persons
 **/
exports.eventsIdRelated_personsGET = function(ID) {
    return sqlDb("persons").whereIn('id',function() {
      this.select("personID").from("contact").where({
        eventID: ID
      })
    }).then(data => {
      return data;
    })
}


/**
 * Get the list of the related Services Associated with an Event
 * Retrieves a collection of Services associated with a specific Event.
 *
 * id String The UUID of the event to retrieve related Services for
 * returns Services
 **/
exports.eventsIdRelated_servicesGET = function(ID) {
  return sqlDb("services").whereIn('id',function() {
    this.select("serviceID").from("present").where({
      eventID: ID
    })
  }).then(data => {
    return data;
  })
}

