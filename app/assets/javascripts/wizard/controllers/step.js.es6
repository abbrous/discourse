export default Ember.Controller.extend({
  step: null,

  actions: {
    nextStep() {
      this.transitionToRoute('step', this.get('step.next'));
    }
  }

});
