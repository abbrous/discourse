import { findStep }  from 'wizard/lib/all-steps';

export default Ember.Route.extend({
  model(params) {
    return findStep(params.step_id);
  },

  setupController(controller, model) {
    controller.set('step', model);
  }
});
