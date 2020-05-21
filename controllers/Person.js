'use strict';

var utils = require('../utils/writer.js');
var Person = require('../service/PersonService');

module.exports.personsGET = function personsGET (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Person.personsGET(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.personsIdGET = function personsIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Person.personsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.personsIdRelated_EventsGET = function personsIdRelated_EventsGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Person.personsIdRelated_EventsGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.personsIdRelated_servicesGET = function personsIdRelated_servicesGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Person.personsIdRelated_servicesGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
