const should = require('should');
const idField = require('../../index').Fields.id;

describe('idField', function () {
  it('should be an object', function () {
    idField.should.be.an.Object();
  });

  it('should have 8 keys', function () {
    Object.keys(idField).should.have.length(8);
  });

  it('should have keys: [type, id, name, fieldType, isRequired, isListField, defaultValue, validator]', function () {
    idField.should.have.keys('type', 'id', 'name', 'fieldType', 'isRequired', 'isListField', 'defaultValue', 'validator');
  });

  describe('id', function () {
    it('should be "id"', function () {
      idField.should.have.property('id', 'id');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      idField.type.should.be.an.Object();
    });

    it('should have id "Core.Field"', function () {
      idField.type.should.have.property('id', 'Core.Field');
    });
  });

  describe('fieldType', function () {
    it('should be an Object', function () {
      idField.fieldType.should.be.an.Object();
    });

    it('should have id "Core.TextType"', function () {
      idField.fieldType.should.have.property('id', 'Core.TextType');
    });
  });

  describe('isRequired', function () {
    it('should be true', function () {
      idField.isRequired.should.be.true();
    });
  });

  describe('isListField', function () {
    it('should be false', function () {
      idField.isListField.should.be.false();
    });
  });

  describe('defaultValue', function () {
    it('should be undefined', function () {
      should.equal(idField.defaultValue, undefined);
    });
  });
});
