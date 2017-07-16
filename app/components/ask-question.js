import Ember from 'ember';

export default Ember.Component.extend({
  askNewQuestion: false,
  actions: {
    askFormShow(){
      this.set('askNewQuestion', true);
    },

    saveQuestion1(){
      var params = {
        swali: this.get('swali'),
        author: this.get('author'),
        notes: this.get('notes'),
        answer: this.get('answer')
      };
      this.set('askNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
