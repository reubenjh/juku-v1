
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('prints').del()
    .then(function () {
      // Inserts seed entries
      return knex('prints').insert([
        {title: 'juicy melons', description: 'juicy juicy melons from spain', quantity: 1, image: 'images/fakeart.jpg', price: 20},
        {title: 'pumpernickel', description: 'i drew this while eating pumpernickel', quantity: 1, image: 'images/fakeart.jpg', price: 33}
      ]);
    });
};
