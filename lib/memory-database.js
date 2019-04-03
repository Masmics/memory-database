const uuid = require('uuid/v4');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }
  
  create(dog) {
    const _id = uuid();
    const newObj = { ...dog, id: _id };
    this.store[_id] = newObj;
    console.log('this.store', this.store._id);
    return newObj;
  }

  // findById(_id) {
  // const target = this.store.find(id); 
  // return target; 
  //}
}

// findById

module.exports = MemoryDatabase;


