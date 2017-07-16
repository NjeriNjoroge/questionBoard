import DS from 'ember-data';

export default DS.Model.extend({
  swali: DS.attr(),
  answer: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
