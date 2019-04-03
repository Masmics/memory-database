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
    // it('can create unique uuid', () => {
    //   const dog = {
    //     name: 'rufus',
    //     _id: ''
    //   };
    // });
  });
});
