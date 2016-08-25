export default Ember.Route.extend({
  beforeModel() {
    this.replaceWith('step', 'forum-title');
  }
});
