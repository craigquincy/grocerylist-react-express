
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groceries').del()
    .then(function () {
      // Inserts seed entries
      return knex('groceries').insert([
        { name: 'Bananas', quantity: 3},
        { name: 'Apples', quantity: 1}
      ]);
    });
};
