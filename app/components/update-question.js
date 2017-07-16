import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm(){
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        swali: this.get('swali'),
        author: this.get('author'),
        notes: this.get('notes'),
        answer: this.get('answer'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
