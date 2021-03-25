/**
 * Copyright (c) 2016 - 2021 Alex Grant (@localnerve), LocalNerve LLC
 * Copyrights licensed under the BSD License. See the accompanying LICENSE file for terms.
 */
/* global describe, before, after, it */
'use strict';

var expect = require('chai').expect;
var mocks = require('test/mocks');

describe('contact service', function() {
  var contact;

  before(function() {
    this.timeout(5000);

    mocks.serviceMail.begin();
    contact = require('application/server/services/contact');
  });

  after(function() {
    mocks.serviceMail.end();
  });

  describe('object', function() {
    it('should have name and create members', function() {
      expect(contact.name).to.be.a('string');
      expect(contact.create).to.be.a('function');
    });
  });

  describe('create', function() {
    it('should return a valid response', function(done) {
      contact.create(null, null, {}, null, null, function(err) {
        if (err) {
          done(err);
        }
        done();
      });
    });
  });
});
