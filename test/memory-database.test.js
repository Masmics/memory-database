const MemoryDatabase = require('../lib/memory-database');

describe('memory-db methods', () => {
  let db;
  beforeEach(() => {
    db = new MemoryDatabase();
  });
  describe('memory database', () => {
    it('checks store is instantiated', () => {
      expect(db.store).toEqual([]);
    });
    it('can create new items', () => {
      const dog = {
        name: 'rufus'
      };
      db.create(dog);
      expect(Object.values(db.store)).toContainEqual(dog);
    });
  });
});
