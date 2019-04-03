const MemoryDatabase = require('../lib/memory-database');

describe('memory-db methods', () => {
  let db;

  beforeEach(() => {
    db = new MemoryDatabase();
  });

  describe('memory database (create method)', () => {
    it('checks store is instantiated', () => {
      expect(db.store).toEqual({});
    });
    it('can create new items', () => {
      const dog = {
        name: 'rufus'
      };
      const newDog = db.create(dog);
      expect(Object.values(db.store)).toContainEqual(newDog);
    });
  });
  


  // describe('findById method', () => {
  //   it('can find object  by ID', () => {
  //     const dog = {
  //       name: 'rufus'
  //     };
  //     const newDog = db.create(dog);
  //
  //newDog should hold the returned object with the id in it;
  //from there, bracket notate the id off the store
  //     expect(db.findById(newDog.id)).toEqual(newDog);
  //   });

});


//findById
