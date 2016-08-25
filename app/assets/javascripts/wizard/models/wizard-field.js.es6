import computed from 'ember-addons/ember-computed-decorators';

export default Ember.Object.extend({
  id: null,
  type: null,
  step: null,
  value: null,

  @computed('step.i18nKey', 'id')
  i18nKey: (stepKey, id) => `${stepKey}.fields.${Ember.String.underscore(id)}`,

  @computed('i18nKey')
  label: idKey => I18n.t(`${idKey}.label`),

  @computed('i18nKey')
  placeholder: idKey => I18n.t(`${idKey}.placeholder`)

});
