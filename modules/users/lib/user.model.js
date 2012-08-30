var express = require('express');

///////////
// Model //
///////////

module.exports.User = function(tenant, firstName, lastName) {
    
    var that = {};

    that.id = Math.round(Math.random() * 1000000);
    that.tenant = tenant;
    that.firstName = firstName;
    that.lastName = lastName;
    that.displayName = that.firstName + " " + that.lastName;

    return that;
    
};