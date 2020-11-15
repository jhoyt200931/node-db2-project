
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 1234567890, make: 'Mitsubishi', model: 'mirage', mileage: 25660.5, transmission: 'auto', title: 'clean'},
        {VIN: 5890132674, make: 'Ford', model: 'mustang', mileage: 10220.3, transmission: 'manual', title: 'clean'},
        {VIN: 4152630897, make: 'Chevrolet', model: 'corvette', mileage: 9537.2, transmission: 'manual', title: 'salvage'}
      ]);
    });
};
