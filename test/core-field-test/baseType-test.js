const should = require('should');
const baseTypeField = require('../../index').Fields.baseType;

describe('baseTypeField', function () {
  it('should be an object', function () {
    baseTypeField.should.be.an.Object();
  });

  it('should have 8 keys', function () {
    Object.keys(baseTypeField).should.have.length(8);
  });

  it('should have keys: [type, id, name, fieldType, isRequired, isListField, defaultValue, validator]', function () {
    baseTypeField.should.have.keys('type', 'id', 'name', 'fieldType', 'isRequired', 'isListField', 'defaultValue', 'validator');
  });

  describe('id', function () {
    it('should be "baseType"', function () {
      baseTypeField.should.have.property('id', 'baseType');
    });
  });

  describe('type', function () {
    it('should be an Object', function () {
      baseTypeField.type.should.be.an.Object();
    });

    it('should have id "Core.Field"', function () {
      baseTypeField.type.should.have.property('id', 'Core.Field');
    });
  });

  describe('fieldType', function () {
    it('should be an Object', function () {
      baseTypeField.fieldType.should.be.an.Object();
    });

    it('should have id "Core.RecordType"', function () {
      baseTypeField.fieldType.should.have.property('id', 'Core.RecordType');
    });
  });

  describe('isRequired', function () {
    it('should be false', function () {
      baseTypeField.isRequired.should.be.false();
    });
  });

  describe('isListField', function () {
    it('should be false', function () {
      baseTypeField.isListField.should.be.false();
    });
  });

  describe('defaultValue', function () {
    it('should be an Object', function () {
      baseTypeField.defaultValue.should.be.an.Object();
    });

    it('should have id "Core.Record"', function () {
      baseTypeField.defaultValue.should.have.property('id', 'Core.Record');
    });
  });
});
