
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email_address: 'rjharcourt@gmail.com', hash: '1234'}
      ]);
    });
};
