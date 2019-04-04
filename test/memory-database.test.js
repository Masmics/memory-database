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
  describe('findById method', () => {
    it('can find an obj by id in the db', () => {
      const dog = { name: 'rufus' };
      const newDog = db.create(dog);
      const findDog = db.findById(newDog.id);
      expect(findDog).toEqual(newDog);
    });
  });

});
