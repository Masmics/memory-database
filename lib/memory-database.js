const uuid = require('uuid/v4');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }
  
  create(dog) {
    const _id = uuid();
    const newObj = { ...dog, id: _id };
    this.store[_id] = newObj;
    return newObj;
  }

  findById(_id) {
    const obj = this.store[_id];
    if(!obj) {
      throw `No object with _id ${_id}`;
    }
    return obj;
  }

  find() { 
    return Object.values(this.store);
  }

  findByIdAndUpdate(_id, updated) {  
    this.store[_id] = updated;
    const obj = this.store[_id];
    if(!obj) {
      throw `Object with _id ${_id} not found`;
    }
    return obj;
  }

  //findByIdAndDelete

  drop() {
    this.store = {};
  }
}

module.exports = MemoryDatabase;
