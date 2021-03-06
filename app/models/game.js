import DS from 'ember-data';

export default DS.Model.extend({
  character: DS.attr(),
  answer: DS.attr(),
  guesses: DS.hasMany('guess', {async: true}),
  rooms: DS.hasMany('room', {async: true}),
  suspects: DS.hasMany('suspect', {async: true}),
  weapons: DS.hasMany('weapon', {async: true})
});
