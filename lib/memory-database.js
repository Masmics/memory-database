class MemoryDatabase {
  constructor() {
    this.store = [];
  }

  create(dog) {
    this.store.push(dog);
  }
  
}


module.exports = MemoryDatabase;


