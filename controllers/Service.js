'use strict';

var utils = require('../utils/writer.js');
var Service = require('../service/ServiceService');

module.exports.servicesGET = function servicesGET (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Service.servicesGET(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesIdGET = function servicesIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Service.servicesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesIdRelated_eventsGET = function servicesIdRelated_eventsGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Service.servicesIdRelated_eventsGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesIdRelated_personsGET = function servicesIdRelated_personsGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Service.servicesIdRelated_personsGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
