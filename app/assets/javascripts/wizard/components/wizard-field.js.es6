import computed from 'ember-addons/ember-computed-decorators';

export default Ember.Component.extend({
  classNames: 'wizard-field text-field',

  @computed('field.id')
  inputClassName: id => `field-${Ember.String.dasherize(id)}`
});
